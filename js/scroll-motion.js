/* Scroll follows the PoC's data paths and the real AioLM screenshots. */
(() => {
  'use strict';
  const clamp = value => Math.min(1, Math.max(0, value));
  const smooth = value => value * value * (3 - 2 * value);
  const svgNS = 'http://www.w3.org/2000/svg';

  function diagram(element) {
    const board = element.querySelector('.flow-board');
    const svg = element.querySelector('.flow-connectors');
    const layer = element.querySelector('[data-flow-routes]');
    const nodeEntries = Array.from(element.querySelectorAll('[data-flow-node]'), node => [node.dataset.flowNode, node]);
    const nodes = Object.fromEntries(nodeEntries);
    const stages = element.querySelectorAll('.flow-stages li');
    const definitions = [
      ['jira', 'postgres', 0, .14], ['postgres', 'vector', .14, .28], ['vector', 'rag', .28, .42],
      ['rag', 'model', .42, .64],
      ['question', 'model', .64, .76], ['model', 'sql', .76, .88], ['sql', 'result', .88, 1]
    ];
    const thresholds = { jira: 0, postgres: .14, vector: .28, rag: .42, model: .64, question: .64, sql: .88, result: 1 };
    const phaseRanges = [[0, .42], [.42, .64], [.64, 1]];
    const routes = definitions.map(([from, to, start, end]) => {
      const group = document.createElementNS(svgNS, 'g');
      const base = document.createElementNS(svgNS, 'path');
      const trace = document.createElementNS(svgNS, 'path');
      const arrow = document.createElementNS(svgNS, 'path');
      const dot = document.createElementNS(svgNS, 'circle');
      base.setAttribute('class', 'flow-route-base');
      trace.setAttribute('class', 'flow-route-trace');
      arrow.setAttribute('class', 'flow-route-arrow');
      arrow.setAttribute('d', 'M-5 -3L0 0L-5 3');
      dot.setAttribute('class', 'flow-route-dot');
      dot.setAttribute('r', '5');
      dot.setAttribute('opacity', '0');
      group.append(base, trace, arrow, dot);
      layer.append(group);
      return { from, to, start, end, base, trace, arrow, dot, length: 0 };
    });
    const measure = () => {
      const origin = board.getBoundingClientRect();
      if (!origin.width || !origin.height) return;
      svg.setAttribute('viewBox', `0 0 ${origin.width} ${origin.height}`);
      const boxes = Object.fromEntries(Object.entries(nodes).map(([key, node]) => {
        const rect = node.getBoundingClientRect();
        return [key, { left: rect.left - origin.left, top: rect.top - origin.top, right: rect.right - origin.left, bottom: rect.bottom - origin.top, x: rect.left - origin.left + rect.width / 2, y: rect.top - origin.top + rect.height / 2 }];
      }));
      const vertical = boxes.question.bottom < boxes.model.top;
      for (const route of routes) {
        const from = boxes[route.from], to = boxes[route.to];
        let path;
        if (route.from === 'rag') {
          if (vertical) {
            const middle = (from.left + to.right) / 2;
            path = `M${from.left} ${from.y}H${middle}V${to.y}H${to.right}`;
          } else {
            const middle = (from.top + to.bottom) / 2;
            path = `M${from.x} ${from.top}V${middle}H${to.x}V${to.bottom}`;
          }
        } else {
          path = vertical ? `M${from.x} ${from.bottom}L${to.x} ${to.top}` : `M${from.right} ${from.y}L${to.left} ${to.y}`;
        }
        route.base.setAttribute('d', path);
        route.trace.setAttribute('d', path);
        route.length = route.trace.getTotalLength();
        route.trace.style.strokeDasharray = String(route.length);
        const end = route.trace.getPointAtLength(route.length);
        const before = route.trace.getPointAtLength(Math.max(0, route.length - 1));
        const angle = Math.atan2(end.y - before.y, end.x - before.x) * 180 / Math.PI;
        route.arrow.setAttribute('transform', `translate(${end.x} ${end.y}) rotate(${angle})`);
      }
      element.classList.add('is-enhanced');
    };
    const draw = (progress, still) => {
      let currentRoute = null;
      for (const route of routes) {
        const value = clamp((progress - route.start) / (route.end - route.start));
        const running = !still && value > 0 && value < 1;
        route.trace.style.strokeDashoffset = String(route.length * (1 - value));
        route.trace.classList.toggle('is-running', running);
        route.arrow.setAttribute('opacity', value >= 1 ? '1' : '.25');
        route.dot.setAttribute('opacity', running ? '1' : '0');
        if (running) {
          currentRoute = route;
          const point = route.trace.getPointAtLength(route.length * value);
          route.dot.setAttribute('cx', String(point.x));
          route.dot.setAttribute('cy', String(point.y));
        }
      }
      for (const [key, node] of nodeEntries) {
        node.classList.toggle('is-active', progress >= thresholds[key]);
        node.classList.toggle('is-current', !still && (key === currentRoute?.from || key === currentRoute?.to || (progress >= 1 && key === 'result')));
      }
      const active = progress < .42 ? 0 : progress < .64 ? 1 : 2;
      stages.forEach((stage, index) => {
        const [start, end] = phaseRanges[index];
        stage.style.setProperty('--stage-progress', String(clamp((progress - start) / (end - start))));
        stage.classList.toggle('is-active', !still && index === active);
        if (!still && index === active) stage.setAttribute('aria-current', 'step');
        else stage.removeAttribute('aria-current');
      });
    };
    return { board, measure, draw };
  }

  window.setupMainMotion = root => {
    document.documentElement.classList.add('has-js');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const scenes = Array.from(root.querySelectorAll('[data-ax-flow]'), diagram);
    const reels = Array.from(root.querySelectorAll('[data-screen-reel]'));
    let frame = 0;
    let disposed = false;
    let printing = false;
    let dirty = true;
    const render = () => {
      frame = 0;
      if (disposed) return;
      const viewport = window.innerHeight;
      const still = printing || reduced.matches;
      document.documentElement.classList.toggle('reduced-motion', reduced.matches);
      for (const scene of scenes) {
        if (dirty) scene.measure();
        const rect = scene.board.getBoundingClientRect();
        if (!rect.height) continue;
        // Start after entry, without waiting until the flow reaches the viewport center.
        const progress = still ? 1 : clamp((viewport * .75 - rect.top) / (viewport * .6));
        scene.draw(progress, still);
      }
      dirty = false;
      for (const reel of reels) {
        const rect = reel.closest('.portfolio-project').getBoundingClientRect();
        if (!rect.height || (!printing && (rect.bottom < 0 || rect.top > viewport))) continue;
        const mediaRect = reel.parentElement.getBoundingClientRect();
        const reelRect = reel.getBoundingClientRect();
        // Use the image's natural position, so sticky positioning cannot stall progress.
        const imageTop = rect.top + reelRect.top - mediaRect.top;
        const transition = smooth(clamp((viewport * .65 - imageTop) / (viewport * .5)));
        const [first, second] = reel.children;
        reel.classList.toggle('is-switching', !still && transition > 0 && transition < 1);
        reel.style.setProperty('--screen-progress', String(transition));
        if (still) {
          first.style.opacity = '1'; second.style.opacity = '1';
          first.style.transform = 'none'; second.style.transform = 'none';
          first.style.clipPath = 'none'; second.style.clipPath = 'none';
        } else {
          first.style.opacity = transition >= 1 ? '0' : String(1 - transition * .35);
          second.style.opacity = transition > 0 ? '1' : '0';
          first.style.transform = `translate3d(0,${-transition * 24}px,0) rotateX(${transition * 10}deg) scale(${1 - transition * .06})`;
          second.style.transform = 'none';
          second.style.clipPath = `inset(0 ${(1 - transition) * 100}% 0 0)`;
        }
      }
    };
    const schedule = () => { if (!frame && !disposed) frame = requestAnimationFrame(render); };
    const resize = () => { dirty = true; schedule(); };
    const beforePrint = () => { cancelAnimationFrame(frame); printing = true; dirty = true; render(); };
    const afterPrint = () => { printing = false; resize(); };
    const observer = new ResizeObserver(resize);
    observer.observe(root);
    scenes.forEach(scene => observer.observe(scene.board));
    window.addEventListener('beforeprint', beforePrint);
    window.addEventListener('afterprint', afterPrint);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', resize);
    root.addEventListener('toggle', resize, true);
    reduced.addEventListener('change', resize);
    document.fonts.ready.then(resize);
    schedule();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('beforeprint', beforePrint);
      window.removeEventListener('afterprint', afterPrint);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', resize);
      root.removeEventListener('toggle', resize, true);
      reduced.removeEventListener('change', resize);
    };
  };
})();
