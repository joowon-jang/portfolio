(function () {
  'use strict';

  const scriptBaseURL = new URL('../', document.currentScript.src);
  const labels = {
    ko: { brief: '프로젝트 요약', original: '원본 보기', solution: '해결', projects: '프로젝트 목록' },
    en: { brief: 'Project brief', original: 'Open original', solution: 'Solution', projects: 'All projects' },
    ja: { brief: 'プロジェクト概要', original: 'オリジナルを開く', solution: '解決', projects: 'プロジェクト一覧' }
  };

  function escapeHTML(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, (character) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[character]);
  }

  function list(value, className = 'detail-list') {
    const items = Array.isArray(value) ? value : [value];
    return `<ul class="${className}">${items.map((item) => `<li>${escapeHTML(item)}</li>`).join('')}</ul>`;
  }

  // Pure markup API. The shared router owns the surrounding shell and route state.
  function markup({ projectId, language = 'ko', assetBaseURL = scriptBaseURL }) {
    const lang = Object.hasOwn(labels, language) ? language : 'ko';
    const tr = I18N[lang];
    const copy = UI_COPY[lang];
    const text = labels[lang];
    const projects = tr.projects;
    const index = projects.findIndex((item) => item.id === projectId);
    if (index === -1) return '';

    const project = projects[index];
    const baseURL = new URL(assetBaseURL, scriptBaseURL);
    const assetURL = (path) => escapeHTML(new URL(path, baseURL).href);
    const routeURL = (hash) => {
      const url = new URL('index.html', baseURL);
      url.hash = hash;
      return escapeHTML(url.href);
    };
    const headingId = (key) => `detail-${project.id}-${key}`;
    const section = (key, title, content, extraClass = '', metadata = '') => `
      <section class="detail-section ${extraClass}" aria-labelledby="${headingId(key)}">
        <div class="detail-section-head"><h2 id="${headingId(key)}">${escapeHTML(title)}</h2>${metadata ? `<p class="detail-section-meta">${escapeHTML(metadata)}</p>` : ''}</div>
        <div class="detail-section-body">${content}</div>
      </section>`;

    const links = (project.links || LINKS[project.id] || []).map((link) => `
      <a class="detail-external-link" href="${assetURL(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(link.label || LINK_LABELS[lang][link.key])}<span aria-hidden="true">↗</span></a>`).join('');
    const phases = project.rolePhases || [{ period: project.period, team: project.team, role: project.role }];
    const rows = phases.map((phase) => `
      <tr>
        <th scope="row" data-label="${escapeHTML(copy.statusLabels.period)}">${phase.phase ? `<strong>${escapeHTML(phase.phase)}</strong>` : ''}<span>${escapeHTML(phase.period || project.period)}</span></th>
        <td data-label="${escapeHTML(copy.statusLabels.team)}">${escapeHTML(phase.team || project.team)}</td>
        <td data-label="${escapeHTML(copy.roleLabel)}">${list(phase.role)}</td>
      </tr>`).join('');
    const information = `
      <div class="detail-table-wrap"><table class="detail-info-table">
        <caption class="detail-visually-hidden">${escapeHTML(copy.statusTitle)}</caption>
        <thead><tr><th scope="col">${escapeHTML(copy.statusLabels.period)}</th><th scope="col">${escapeHTML(copy.statusLabels.team)}</th><th scope="col">${escapeHTML(copy.roleLabel)}</th></tr></thead>
        <tbody>${rows}</tbody>
      </table></div>
      ${links ? `<div class="detail-info-row"><h3>${escapeHTML(copy.statusLabels.links)}</h3><div class="detail-links">${links}</div></div>` : ''}
      ${project.testAccount ? `<div class="detail-info-row"><h3>${escapeHTML(copy.statusLabels.testAccount)}</h3><code class="detail-test-account">${escapeHTML(project.testAccount)}</code></div>` : ''}`;
    const brief = copy.hud[project.id];
    const hud = brief?.length ? `<dl class="detail-brief">${brief.map((value, itemIndex) => `
      <div><dt>${escapeHTML(copy.hudLabels[itemIndex])}</dt><dd>${Array.isArray(value) ? list(value) : `<p>${escapeHTML(value)}</p>`}</dd></div>`).join('')}</dl>` : '';

    const flowData = project.flow || [];
    const flowTracks = flowData.length && !Object.hasOwn(flowData[0], 'steps') ? [{ steps: flowData }] : flowData;
    const flowStep = (step) => typeof step === 'string'
      ? `<li class="detail-flow-step"><span>${escapeHTML(step)}</span></li>`
      : `<li class="detail-flow-step detail-flow-branch"><ul class="detail-flow-options" role="list">${step.branch.map((option, optionIndex) => `<li>${optionIndex ? `<span class="detail-flow-or">${escapeHTML(copy.flowOr)}</span>` : ''}<span>${escapeHTML(option)}</span></li>`).join('')}</ul></li>`;
    const flow = flowTracks.map((track) => `<div class="detail-flow-track">${track.name ? `<h4>${escapeHTML(track.name)}</h4>` : ''}<ol class="detail-flow">${track.steps.map(flowStep).join('')}</ol></div>`).join('');
    const overview = `${list(project.productSummary || project.bullets || [])}${flow ? `<div class="detail-flow-block"><h3>${escapeHTML(copy.flowTitle)}</h3>${flow}</div>` : ''}`;

    const shotLabels = copy.shotLabels[project.id] || [];
    const shotPrefix = `shot-${project.id}-`;
    const shotKeys = Object.keys(IMAGES).filter((key) => key.startsWith(shotPrefix) && IMAGES[key]).sort((a, b) => Number(a.slice(shotPrefix.length)) - Number(b.slice(shotPrefix.length)));
    const screenshots = shotKeys.map((key) => {
      const source = IMAGES[key];
      const shotIndex = Number(key.slice(shotPrefix.length)) - 1;
      const caption = shotLabels[shotIndex] || copy.imageLabels[project.id];
      const dimensions = IMAGE_DIMENSIONS[key];
      const size = dimensions ? ` width="${escapeHTML(dimensions[0])}" height="${escapeHTML(dimensions[1])}"` : '';
      const isVideo = /\.(?:mov|mp4|webm)(?:[?#]|$)/i.test(source);
      const poster = VIDEO_POSTERS[key];
      const media = isVideo
        ? `<video class="detail-video" controls playsinline preload="metadata" aria-label="${escapeHTML(caption)}"${poster ? ` poster="${assetURL(poster)}"` : ''}${size}><source src="${assetURL(source)}"><a href="${assetURL(source)}">${escapeHTML(text.original)}</a></video>${poster ? `<img class="detail-print-poster" src="${assetURL(poster)}" alt="${escapeHTML(caption)}">` : ''}`
        : `<a class="detail-shot-link" href="${assetURL(source)}" target="_blank" rel="noopener noreferrer"><img class="detail-screenshot" src="${assetURL(source)}" alt="${escapeHTML(caption)}"${size} decoding="async"></a>`;
      return `<figure class="detail-shot">${media}<figcaption><span>${escapeHTML(caption)}</span><a href="${assetURL(source)}" target="_blank" rel="noopener noreferrer">${escapeHTML(text.original)} <span aria-hidden="true">↗</span></a></figcaption></figure>`;
    }).join('');
    const features = `<ul class="detail-features" role="list">${project.features.map((feature) => `<li><h3>${escapeHTML(feature.name)}</h3><p>${escapeHTML(feature.desc)}</p></li>`).join('')}</ul>`;
    const roles = project.roles?.length ? `<ol class="detail-roles">${project.roles.map((role) => typeof role === 'string'
      ? `<li><p>${escapeHTML(role)}</p></li>`
      : `<li><h3>${escapeHTML(role.title)}</h3>${role.points ? list(role.points) : `<p>${escapeHTML(role.desc)}</p>`}</li>`).join('')}</ol>` : '';
    const troubles = project.troubles?.length ? `<ul class="detail-troubles" role="list">${project.troubles.map((item, itemIndex) => `<li><h3><span class="detail-item-number" aria-hidden="true">${String(itemIndex + 1).padStart(2, '0')}</span>${escapeHTML(item.problem)}</h3><dl><div><dt>${escapeHTML(text.solution)}</dt><dd><p>${escapeHTML(item.solution)}</p></dd></div></dl></li>`).join('')}</ul>` : '';
    const stack = project.stackGroups?.length
      ? project.stackGroups.map((group) => `<section class="detail-stack-group"><h3>${escapeHTML(group.name)}</h3>${list(group.items, 'detail-stack')}</section>`).join('')
      : list(project.stack, 'detail-stack');
    const pagerLink = (item, direction) => `<a class="detail-pager-link detail-pager-${direction}" href="${routeURL(item.id)}"><span>${escapeHTML(direction === 'prev' ? tr.prev : tr.next)}</span><strong>${escapeHTML(item.name)}</strong><span class="detail-pager-arrow" aria-hidden="true">${direction === 'prev' ? '←' : '→'}</span></a>`;

    return `<article class="project-detail" data-project-detail="${escapeHTML(project.id)}" lang="${lang}" aria-labelledby="${headingId('title')}">
      <a class="detail-back" href="${routeURL('sec-projects')}"><span aria-hidden="true">←</span>${escapeHTML(tr.back)}</a>
      <header class="detail-hero">
        <p class="detail-eyebrow">${escapeHTML(tr.sideQuestLabel)} <span>${String(index + 1).padStart(2, '0')} / ${String(projects.length).padStart(2, '0')}</span></p>
        <h1 id="${headingId('title')}">${escapeHTML(project.name)}</h1>
        <p class="detail-description">${escapeHTML(project.desc)}</p>
        <dl class="detail-meta"><div><dt>${escapeHTML(copy.statusLabels.period)}</dt><dd>${escapeHTML(project.period)}</dd></div><div><dt>${escapeHTML(copy.statusLabels.team)}</dt><dd>${escapeHTML(project.team)}</dd></div></dl>
      </header>
      ${hud ? section('brief', text.brief, hud, 'detail-brief-section') : ''}
      ${section('info', copy.statusTitle, information)}
      ${project.motivation ? section('motivation', project.motivation.title, list(project.motivation.points)) : ''}
      ${project.outcome?.length ? section('outcome', tr.dOutcome, `${project.verified ? `<p class="detail-outcome-status">${escapeHTML(copy.outcomeStatus)}</p>` : ''}${list(project.outcome)}`, 'detail-outcome') : ''}
      ${section('overview', tr.dOverview, overview)}
      ${project.hideScreenshots || project.hideScreenshot || !screenshots ? '' : section('screenshots', tr.dShots, `<div class="detail-shots${project.screenshotLayout === 'wide' ? ' detail-shots-wide' : ''}">${screenshots}</div>`, 'detail-screenshots-section', project.screenshotsMeta || copy.screenshotsReady)}
      ${section('features', tr.dFeatures, features)}
      ${roles ? section('roles', tr.dRole, roles) : ''}
      ${troubles ? section('troubles', tr.dTrouble, troubles) : ''}
      ${section('stack', tr.dStack, `<div class="detail-stack-groups">${stack}</div>`)}
    </article>
    <nav class="detail-pager" aria-label="${escapeHTML(text.projects)}">
      ${index > 0 ? pagerLink(projects[index - 1], 'prev') : ''}
      <a class="detail-pager-back" href="${routeURL('sec-projects')}">${escapeHTML(text.projects)}</a>
      ${index < projects.length - 1 ? pagerLink(projects[index + 1], 'next') : ''}
    </nav>`;
  }

  window.PortfolioDetails = { markup };
})();
