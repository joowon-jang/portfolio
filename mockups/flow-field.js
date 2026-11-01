(() => {
  'use strict';

  // Abstract subject graphic, not a visualization of customer data.
  // The parent owns animation: render(0..1), resize(), destroy().
  window.createFlowField = function createFlowField(canvas) {
    if (!canvas || typeof canvas.getContext !== 'function') return null;
    let context;
    try {
      context = canvas.getContext('2d');
    } catch (_) {
      return null;
    }
    if (!context) return null;

    const strands = 24;
    const samples = 64;
    const count = strands * samples;
    const buckets = 12;
    const edgeKinds = 4;
    const tau = Math.PI * 2;
    let field = new Float32Array(count * 9);
    let projectedX = new Float32Array(count);
    let projectedY = new Float32Array(count);
    let depth = new Float32Array(count);
    let edgeFrom = new Uint16Array(count * 2);
    let edgeTo = new Uint16Array(count * 2);
    let edgeKind = new Uint8Array(count * 2);
    let edgeNext = new Int32Array(count * 2);
    let edgeHeads = new Int32Array(buckets * edgeKinds);
    let faces = new Uint16Array(strands * samples);
    let faceNext = new Int32Array(strands * samples / 4);
    let faceHeads = new Int32Array(buckets);
    let colors = new Array(buckets);
    let edgeCount = 0;
    let faceCount = 0;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let scale = 1;
    let lastProgress = 0;
    let destroyed = false;

    function smooth(value) {
      const t = Math.max(0, Math.min(1, value));
      return t * t * (3 - 2 * t);
    }

    function signedPower(value, exponent) {
      return Math.sign(value) * Math.pow(Math.abs(value), exponent);
    }

    function addEdge(from, to, kind) {
      edgeFrom[edgeCount] = from;
      edgeTo[edgeCount] = to;
      edgeKind[edgeCount] = kind;
      edgeCount++;
    }

    // Three positions for every persistent vertex. No random input or frame-time
    // geometry construction: the same scroll position always gives the same image.
    for (let strand = 0; strand < strands; strand++) {
      const lane = strand / (strands - 1);
      const centered = lane * 2 - 1;
      const group = Math.floor(strand / 8);
      const inGroup = (strand % 8) / 7;
      const groupDepth = inGroup * 2 - 1;
      const emphasis = strand % 6 === 0;

      for (let sample = 0; sample < samples; sample++) {
        const index = strand * samples + sample;
        const offset = index * 9;
        const u = sample / (samples - 1);
        const arc = -2.32 + u * 4.94;
        const wave = Math.sin(u * Math.PI);
        const angle = sample / samples * tau;
        const cornerX = signedPower(Math.cos(angle), 0.38);
        const cornerY = signedPower(Math.sin(angle), 0.38);

        // Open, folded stream: a broad asymmetrical sweep, not a point sphere.
        field[offset] = 1.42 * Math.cos(arc) - 0.30 + centered * 0.15
          + (1 - wave) * centered * 0.30;
        field[offset + 1] = 0.76 * Math.sin(arc) + centered * (0.14 + wave * 0.22)
          + 0.10 * Math.sin(arc * 2 + lane);
        field[offset + 2] = 0.54 * Math.sin(arc * 1.22 + 0.55)
          + centered * 0.36 + Math.sin(u * tau + lane * 3) * 0.07;

        // Rounded, enclosed local volume: parallel contours retain their identity.
        const shoulder = 1 - 0.08 * Math.pow(Math.abs(centered), 4);
        field[offset + 3] = cornerX * 0.98 * shoulder;
        field[offset + 4] = cornerY * 0.87 * shoulder;
        field[offset + 5] = centered * 0.72;

        // Three abstract context bundles. Their number has no data semantics.
        const centerX = (group - 1) * 1.10;
        const centerY = group === 1 ? -0.15 : 0.13;
        const centerZ = group === 1 ? -0.30 : 0.12;
        const bevel = 1 - 0.07 * Math.pow(Math.abs(groupDepth), 4);
        field[offset + 6] = centerX + cornerX * 0.40 * bevel;
        field[offset + 7] = centerY + cornerY * 0.59 * bevel;
        field[offset + 8] = centerZ + groupDepth * 0.36;

        if (sample < samples - 1) {
          addEdge(index, index + 1, emphasis ? 1 : 0);
        } else {
          addEdge(index, strand * samples, 3);
        }
        // Sparse transverse ribs reveal volume without becoming a wire grid.
        if (strand % 8 !== 7 && sample % 8 === 0) {
          addEdge(index, index + samples, 2);
        }
        if (strand % 8 !== 7 && sample % 4 === 0 && sample < samples - 4) {
          const next = strand * samples + sample + 4;
          const face = faceCount * 4;
          faces[face] = index;
          faces[face + 1] = next;
          faces[face + 2] = next + samples;
          faces[face + 3] = index + samples;
          faceCount++;
        }
      }
    }

    for (let bucket = 0; bucket < buckets; bucket++) {
      // Back surfaces are airier and cooler; foreground contours reach cobalt.
      const near = bucket / (buckets - 1);
      colors[bucket] = 'rgb(' + Math.round(93 - near * 57) + ','
        + Math.round(128 - near * 55) + ',' + Math.round(250 - near * 13) + ')';
    }

    function render(progress) {
      if (destroyed) return;
      lastProgress = Number.isFinite(progress) ? Math.max(0, Math.min(1, progress)) : 0;
      if (width <= 0 || height <= 0) return;
      // Brief stable poses make the graphic settle with its corresponding copy.
      const local = smooth((lastProgress - 0.06) / 0.36);
      const retrieval = smooth((lastProgress - 0.58) / 0.36);
      const openWeight = 1 - local;
      const localWeight = local * (1 - retrieval);
      const contextWeight = retrieval;
      const yaw = -0.43 + local * 0.12 + retrieval * 0.16;
      const pitch = 0.23 - retrieval * 0.04;
      const roll = -0.13 + local * 0.10 - retrieval * 0.035;
      const cy = Math.cos(yaw);
      const sy = Math.sin(yaw);
      const cx = Math.cos(pitch);
      const sx = Math.sin(pitch);
      const cz = Math.cos(roll);
      const sz = Math.sin(roll);
      const centerX = width * 0.5;
      const centerY = height * 0.49;
      const closure = local;
      const surfaceAlpha = 0.34 + local * 0.66;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.clearRect(0, 0, width, height);
      context.lineCap = 'round';
      context.lineJoin = 'round';
      edgeHeads.fill(-1);
      faceHeads.fill(-1);

      for (let index = 0; index < count; index++) {
        const offset = index * 9;
        const x = field[offset] * openWeight + field[offset + 3] * localWeight
          + field[offset + 6] * contextWeight;
        const y = field[offset + 1] * openWeight + field[offset + 4] * localWeight
          + field[offset + 7] * contextWeight;
        const z = field[offset + 2] * openWeight + field[offset + 5] * localWeight
          + field[offset + 8] * contextWeight;
        const rotatedX = x * cy + z * sy;
        const rotatedZ = z * cy - x * sy;
        const rotatedY = y * cx - rotatedZ * sx;
        const finalZ = y * sx + rotatedZ * cx;
        const perspective = 4.8 / (4.8 - finalZ);
        projectedX[index] = centerX + (rotatedX * cz - rotatedY * sz) * scale * perspective;
        projectedY[index] = centerY + (rotatedX * sz + rotatedY * cz) * scale * perspective;
        depth[index] = finalZ;
      }

      for (let face = 0; face < faceCount; face++) {
        const offset = face * 4;
        const average = (depth[faces[offset]] + depth[faces[offset + 1]]
          + depth[faces[offset + 2]] + depth[faces[offset + 3]]) * 0.25;
        const bucket = Math.max(0, Math.min(buckets - 1, ((average + 1.8) * 3.33) | 0));
        faceNext[face] = faceHeads[bucket];
        faceHeads[bucket] = face;
      }
      for (let edge = 0; edge < edgeCount; edge++) {
        const average = (depth[edgeFrom[edge]] + depth[edgeTo[edge]]) * 0.5;
        const bucket = Math.max(0, Math.min(buckets - 1, ((average + 1.8) * 3.33) | 0));
        const slot = bucket * edgeKinds + edgeKind[edge];
        edgeNext[edge] = edgeHeads[slot];
        edgeHeads[slot] = edge;
      }

      // Painter's order, including translucent skins and their contour edges.
      // All buckets, linked lists, and point buffers are reused each frame.
      for (let bucket = 0; bucket < buckets; bucket++) {
        const near = bucket / (buckets - 1);
        context.fillStyle = colors[bucket];
        context.globalAlpha = (0.018 + near * 0.025) * surfaceAlpha;
        context.beginPath();
        for (let face = faceHeads[bucket]; face !== -1; face = faceNext[face]) {
          const offset = face * 4;
          const a = faces[offset];
          const b = faces[offset + 1];
          const c = faces[offset + 2];
          const d = faces[offset + 3];
          context.moveTo(projectedX[a], projectedY[a]);
          context.lineTo(projectedX[b], projectedY[b]);
          context.lineTo(projectedX[c], projectedY[c]);
          context.lineTo(projectedX[d], projectedY[d]);
          context.closePath();
        }
        context.fill();
        context.strokeStyle = colors[bucket];
        for (let kind = 0; kind < edgeKinds; kind++) {
          const slot = bucket * edgeKinds + kind;
          if (edgeHeads[slot] === -1 || (kind === 3 && closure === 0)) continue;
          const intensity = kind === 1 ? 0.91 : kind === 2 ? 0.22 : 0.47;
          context.globalAlpha = (0.16 + near * 0.76) * intensity
            * (kind === 3 ? closure : 1);
          context.lineWidth = kind === 1 ? 1.25 + near * 0.45 : 0.65 + near * 0.30;
          context.beginPath();
          for (let edge = edgeHeads[slot]; edge !== -1; edge = edgeNext[edge]) {
            const from = edgeFrom[edge];
            const to = edgeTo[edge];
            context.moveTo(projectedX[from], projectedY[from]);
            context.lineTo(projectedX[to], projectedY[to]);
          }
          context.stroke();
        }
      }

      // Sparse glints give the contour intersections a material, not star-field,
      // quality. Radius and opacity follow camera depth rather than elapsed time.
      for (let strand = 0; strand < strands; strand += 3) {
        for (let sample = 4; sample < samples; sample += 12) {
          const index = strand * samples + sample;
          const light = Math.max(0, Math.min(1, (depth[index] + 1.3) / 2.6));
          const radius = 0.65 + light * 1.0;
          context.globalAlpha = 0.25 + light * 0.55;
          context.fillStyle = '#2449ed';
          context.beginPath();
          context.arc(projectedX[index], projectedY[index], radius, 0, tau);
          context.fill();
          if (light > 0.55) {
            context.globalAlpha = (light - 0.55) * 1.4;
            context.fillStyle = '#ffffff';
            context.beginPath();
            context.arc(projectedX[index] - radius * 0.18,
              projectedY[index] - radius * 0.22, radius * 0.42, 0, tau);
            context.fill();
          }
        }
      }
      context.globalAlpha = 1;
    }

    function resize() {
      if (destroyed) return;
      const bounds = canvas.getBoundingClientRect();
      width = Math.max(0, bounds.width);
      height = Math.max(0, bounds.height);
      pixelRatio = Math.min(2, Math.max(1, window.devicePixelRatio || 1));
      const backingWidth = Math.max(1, Math.round(width * pixelRatio));
      const backingHeight = Math.max(1, Math.round(height * pixelRatio));
      if (canvas.width !== backingWidth) canvas.width = backingWidth;
      if (canvas.height !== backingHeight) canvas.height = backingHeight;
      scale = Math.min(width / 3.9, height / 2.9);
      render(lastProgress);
    }

    function destroy() {
      if (destroyed) return;
      destroyed = true;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.clearRect(0, 0, canvas.width, canvas.height);
      field = projectedX = projectedY = depth = null;
      edgeFrom = edgeTo = edgeKind = edgeNext = edgeHeads = null;
      faces = faceNext = faceHeads = colors = null;
      context = null;
      canvas = null;
    }

    resize();
    return { render, resize, destroy };
  };
})();
