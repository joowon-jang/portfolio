/* Shared production homepage, project shell, and hash navigation. */
(() => {
  'use strict';

  const assetBaseURL = new URL('../', document.currentScript.src);
  const indexURL = new URL('index.html', assetBaseURL);
  const root = document.querySelector('[data-portfolio-root]');
  const sectionIds = ['sec-about', 'sec-skills', 'sec-career', 'sec-projects', 'sec-blog', 'sec-contact'];
  const languages = { ko: '한국어', en: 'English', ja: '日本語' };
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const label = value => String(value).replace(/^[■▶\s]+/, '').replace(/^\p{Extended_Pictographic}\uFE0F?\s*/u, '').replace(/\s*★$/, '');
  const list = value => Array.isArray(value) ? `<ul>${value.map(item => `<li>${escape(item)}</li>`).join('')}</ul>` : `<p>${escape(value)}</p>`;
  const stack = values => `<ul class="project-stack" role="list">${values.map(value => `<li>${escape(value)}</li>`).join('')}</ul>`;
  const routeURL = hash => `${indexURL.href}#${hash}`;
  const picture = (slot, alt, className = '') => {
    const [width, height] = IMAGE_DIMENSIONS[slot];
    return `<img class="${className}" src="${escape(new URL(IMAGES[slot], assetBaseURL).href)}" alt="${escape(alt)}" width="${width}" height="${height}" loading="eager" decoding="async">`;
  };
  const flowCopy = {
    ko: { title: 'PoC 핵심 흐름', query: '자연어 조회', preparation: 'RAG 데이터 준비', sources: '데이터 · 문서', sourceDetail: 'Jira → PostgreSQL · PDF 등 문서', question: '자연어 질문', model: '로컬 LLM', local: '오픈웨이트 · 로컬 서빙', result: '조회 결과', vector: '벡터화', context: '검색 맥락', stages: ['데이터 준비', '검색 맥락 연결', '질문에서 조회까지'], detail: '기여 내용' },
    en: { title: 'Core PoC flow', query: 'Natural-language queries', preparation: 'RAG data preparation', sources: 'Data & documents', sourceDetail: 'Jira → PostgreSQL · PDFs & more', question: 'Question', model: 'Local LLM', local: 'Open-weight · locally served', result: 'Query results', vector: 'Vectorization', context: 'Retrieved context', stages: ['Prepare data', 'Retrieve context', 'Question to results'], detail: 'Contributions' },
    ja: { title: 'PoCの主要フロー', query: '自然言語での照会', preparation: 'RAGデータの準備', sources: 'データ・文書', sourceDetail: 'Jira → PostgreSQL · PDFなどの文書', question: '自然言語の質問', model: 'ローカルLLM', local: 'オープンウェイト・ローカル配信', result: '照会結果', vector: 'ベクトル化', context: '検索コンテキスト', stages: ['データ準備', '検索情報の接続', '質問から照会へ'], detail: '貢献内容' }
  };

  function axFlow(language) {
    const words = flowCopy[language];
    const node = (id, title, detail = '') => `<div class="flow-node" data-flow-node="${id}"><span class="flow-node-title">${escape(title)}</span>${detail ? `<span class="flow-node-detail">${escape(detail)}</span>` : ''}</div>`;
    return `<figure class="ax-flow" data-ax-flow><figcaption>${escape(words.title)}</figcaption><div class="flow-board"><svg class="flow-connectors" aria-hidden="true"><g data-flow-routes></g></svg><div class="flow-lane"><p class="flow-lane-label">${escape(words.query)}</p><div class="flow-nodes">${node('question', words.question)}${node('model', words.model, words.local)}${node('sql', 'SQL')}${node('result', words.result)}</div></div><div class="flow-context-label">${escape(words.context)}</div><div class="flow-lane"><p class="flow-lane-label">${escape(words.preparation)}</p><div class="flow-nodes flow-preparation">${node('sources', words.sources, words.sourceDetail)}${node('vector', words.vector)}${node('rag', 'RAG')}</div></div></div><ol class="flow-stages">${words.stages.map((stage, index) => `<li><span aria-hidden="true">0${index + 1}</span>${escape(stage)}</li>`).join('')}</ol></figure>`;
  }

  function contribution(item, copy, language) {
    const disclosure = `<span class="disclosure-label"><span class="when-closed">${escape(copy.careerExpand)}</span><span class="when-open">${escape(copy.careerCollapse)}</span><span class="disclosure-icon" aria-hidden="true">+</span></span>`;
    const body = `<div class="contribution-body">${list(item.desc)}</div>`;
    if (item.featured) {
      return `<li class="contribution featured"><header class="feature-heading"><h4 class="contribution-title">${escape(item.title)}</h4>${item.summary ? `<p class="contribution-summary">${escape(item.summary)}</p>` : ''}</header>${axFlow(language)}<details class="feature-details"><summary><span class="contribution-heading">${escape(flowCopy[language].detail)}</span>${disclosure}</summary>${body}</details></li>`;
    }
    return `<li class="contribution"><details><summary><span class="contribution-date">${item.date ? `<time datetime="${escape(item.date.replace('.', '-'))}">${escape(item.date)}</time>` : ''}</span><span class="contribution-heading"><span class="contribution-title">${escape(item.title)}</span>${item.summary ? `<span class="contribution-summary">${escape(item.summary)}</span>` : ''}${item.outcome ? `<span class="contribution-outcome"><span>${escape(copy.careerOutcome)}</span>${escape(item.outcome)}</span>` : ''}</span>${disclosure}</summary>${body}</details></li>`;
  }

  function shell(language, content, topHash) {
    const tr = I18N[language];
    const copy = UI_COPY[language];
    const nav = [0, 5, 1, 2, 4, 3].map(index => `<a href="${escape(routeURL(sectionIds[index]))}">${escape(tr.nav[index])}</a>`).join('');
    const languageButtons = Object.entries(languages).map(([key, name]) => `<button type="button" data-language="${key}" lang="${key}" aria-label="${escape(key.toUpperCase() + ', ' + name)}" aria-pressed="${key === language}">${key.toUpperCase()}</button>`).join('');
    return `<a class="skip-link" href="#main-content">${escape(copy.skip)}</a>
      <header class="preview-header"><div class="header-inner"><a class="identity" href="${escape(routeURL('sec-about'))}">${escape(tr.heroName)}<span>Portfolio</span></a><button class="menu-toggle" type="button" aria-controls="primary-navigation" aria-expanded="false">${escape(copy.menu)}<span aria-hidden="true">+</span></button><div class="navigation" id="primary-navigation"><nav class="primary-nav" aria-label="${escape(copy.navLabel)}">${nav}</nav><div class="languages" role="group" aria-label="${escape(copy.langLabel)}">${languageButtons}</div></div></div></header>
      <main class="preview-main" id="main-content" tabindex="-1"><div class="home">${content}<footer class="preview-footer">${escape(tr.footer)}</footer></div></main><a class="back-to-top" href="${escape(routeURL(topHash))}" aria-label="${escape(tr.scrollTop)}">↑</a>`;
  }

  function homeMarkup(language) {
    if (!Object.hasOwn(languages, language)) language = 'ko';
    const tr = I18N[language];
    const copy = UI_COPY[language];
    const careers = tr.careers.map(career => `<article class="company"><header class="company-head"><div><h3>${escape(career.company)}</h3><p class="company-role">${escape(career.role)}</p></div><p class="company-period">${escape(career.period)}</p></header><ul class="company-work" role="list">${(career.contributions || []).map(item => contribution(item, copy, language)).join('')}</ul>${career.projects.map(project => `<section class="career-project"><header class="career-project-head"><h4>${escape(label(project.name))}</h4><p>${escape(project.desc)}</p>${stack(project.stack)}</header><ul class="contribution-list" role="list">${project.contributions.map(item => contribution(item, copy, language)).join('')}</ul></section>`).join('')}</article>`).join('');
    const projects = tr.projects.map(project => {
      const media = project.id === 'p4'
        ? `<div class="screen-reel" data-screen-reel>${picture('shot-p4-1', copy.shotLabels.p4[0], 'screen-first')}${picture('shot-p4-2', copy.shotLabels.p4[1], 'screen-second')}</div>`
        : picture(`thumb-${project.id}`, copy.imageLabels[project.id]);
      const href = escape(routeURL(project.id));
      return `<li class="portfolio-project" data-project="${escape(project.id)}"><div class="project-media">${media}</div><div class="project-copy"><p class="project-period">${escape(project.period)}</p><h3 class="project-name"><a href="${href}">${escape(project.name)}<span aria-hidden="true">↗</span></a></h3><p class="project-description">${escape(project.desc)}</p><dl class="project-facts"><div><dt>${escape(copy.projectContribution)}</dt><dd>${list(project.list.contribution)}</dd></div><div><dt>${escape(copy.projectImplementation)}</dt><dd>${list(project.list.implementation)}</dd></div></dl><p class="project-team">${escape(project.team)}</p>${stack(project.stack.slice(0, 3))}<a class="project-open" href="${href}">${escape(tr.sideQuestLabel)} <span aria-hidden="true">↗</span></a></div></li>`;
    }).join('');
    const certs = tr.certs.map(cert => `<li><strong>${escape(cert.name)}</strong><span>${escape(cert.meta)}</span></li>`).join('');
    const blogs = tr.blogPosts.map(post => {
      const meta = BLOG_POSTS.find(item => item.id === post.id);
      return `<li><a href="${escape(meta.url)}" target="_blank" rel="noopener noreferrer"><time datetime="${meta.date.replaceAll('.', '-')}">${escape(meta.date)}</time><h3>${escape(post.title)}<span aria-hidden="true">↗</span></h3><p>${escape(post.desc)}</p><ul class="blog-tags" role="list">${post.tags.map(tag => `<li>${escape(tag)}</li>`).join('')}</ul></a></li>`;
    }).join('');
    const contacts = [['EMAIL', CONTACT.email, `mailto:${CONTACT.email}`], ['GITHUB', CONTACT.github.label, CONTACT.github.url], ['BLOG', CONTACT.blog.label, CONTACT.blog.url], ['HUGGING FACE', CONTACT.huggingface.label, CONTACT.huggingface.url]].map(([name, text, url]) => `<div><span>${name}</span><a href="${escape(url)}"${name === 'EMAIL' ? '' : ' target="_blank" rel="noopener noreferrer"'}>${escape(text)}<span aria-hidden="true">↗</span></a></div>`).join('');
    return shell(language, `
        <header class="intro" id="sec-about"><div class="intro-grid"><div class="intro-copy"><p class="intro-kicker">${escape(label(tr.heroTag))}</p><h1>${escape(tr.heroName)}</h1><p class="intro-role">${escape(tr.heroLevel)}</p><p class="intro-text">${escape(tr.heroIntro)}</p></div><figure class="profile">${picture('photo', tr.heroName)}<figcaption>${escape(tr.playerCaption)}</figcaption></figure></div></header>
        <section class="main-section contact-section" id="sec-contact" aria-labelledby="contact-title"><header class="section-head"><h2 class="section-title" id="contact-title">${escape(label(tr.contactTitle))}</h2></header><div class="contact-grid">${contacts}</div></section>
        <section class="main-section skills-section" id="sec-skills" aria-labelledby="skills-title"><header class="section-head"><h2 class="section-title" id="skills-title">${escape(label(tr.inventoryTitle))}</h2></header><ul class="skill-list" role="list">${[...SKILLS.main, ...SKILLS.sub].map((skill, index) => `<li class="skill${index < SKILLS.main.length ? ' primary-skill' : ''}">${escape(skill === 'AI 활용' ? copy.aiUsage : label(skill))}</li>`).join('')}</ul><p class="collaboration">${escape(tr.collab)}</p></section>
        <section class="main-section" id="sec-career" aria-labelledby="career-title"><header class="section-head"><h2 class="section-title" id="career-title">${escape(label(tr.careerTitle))}</h2></header>${careers}</section>
        <section class="main-section" id="sec-certs" aria-labelledby="cert-title"><header class="section-head"><h2 class="section-title" id="cert-title">${escape(label(tr.achieveTitle))}</h2></header><ul class="cert-list" role="list">${certs}</ul></section>
        <section class="main-section" id="sec-blog" aria-labelledby="blog-title"><header class="section-head"><h2 class="section-title" id="blog-title">${escape(label(tr.blogTitle))}</h2><a href="${escape(CONTACT.blog.url)}" target="_blank" rel="noopener noreferrer">${escape(copy.visitBlog)} <span aria-hidden="true">↗</span></a></header><ul class="blog-list" role="list">${blogs}</ul></section>
        <section class="main-section" id="sec-projects" aria-labelledby="projects-title"><header class="section-head"><h2 class="section-title" id="projects-title">${escape(label(tr.sideQuestTitle))}</h2><p>${escape(copy.projectGuide)}</p></header><ul class="project-list" role="list">${projects}</ul></section>`, 'sec-about');
  }

  window.Portfolio = { homeMarkup };
  if (!root) return;
  document.documentElement.classList.add('has-js');

  let language = root.dataset.renderedLang || 'ko';
  try {
    const savedLanguage = localStorage.getItem('jw-lang');
    if (Object.hasOwn(languages, savedLanguage)) language = savedLanguage;
  } catch (error) { /* Storage is optional in restricted browsing contexts. */ }
  if (!Object.hasOwn(languages, language)) language = 'ko';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let renderedRoute;
  let renderedLanguage;
  let cleanupMotion;
  let activeObserver;
  let printState;
  let locationURL;
  let navigationFrame = 0;
  const positions = new Map();
  let entrySequence = 0;
  const newEntry = () => ({ id: `${Date.now()}-${entrySequence++}` });
  const storedEntry = history.state?.portfolioNavigation;
  let entry = storedEntry || newEntry();
  let initialScrollY = storedEntry?.scrollY;
  try {
    const saved = sessionStorage.getItem(`jw-scroll:${entry.id}`);
    if (saved !== null) {
      const position = Number(saved);
      if (Number.isFinite(position)) initialScrollY = position;
      sessionStorage.removeItem(`jw-scroll:${entry.id}`);
    }
  } catch (error) { /* Session snapshots are optional in restricted browsing contexts. */ }
  history.replaceState({ ...history.state, portfolioNavigation: entry }, '');
  // Restore only after the destination DOM exists; native restoration can clamp to the old page.
  history.scrollRestoration = 'manual';

  function savePosition() {
    entry = { id: entry.id, scrollY: window.scrollY };
    positions.set(entry.id, entry.scrollY);
    history.replaceState({ ...history.state, portfolioNavigation: entry }, '');
  }

  function ensureJapaneseFont() {
    if (language !== 'ja' || document.getElementById('portfolio-font-ja')) return;
    const link = document.createElement('link');
    link.id = 'portfolio-font-ja';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700&display=swap';
    document.head.append(link);
  }

  function projectForHash(hash) {
    return I18N[language].projects.find(project => project.id === hash);
  }

  function setMenuOpen(open) {
    root.querySelector('.menu-toggle').setAttribute('aria-expanded', String(open));
    root.querySelector('.navigation').classList.toggle('is-open', open);
  }

  function stopContent() {
    cleanupMotion?.();
    cleanupMotion = undefined;
    activeObserver?.disconnect();
    activeObserver = undefined;
    root.querySelectorAll('video').forEach(video => video.pause());
  }

  function attachHome() {
    cleanupMotion = window.setupMainMotion?.(root);
    if (!('IntersectionObserver' in window)) return;
    const sections = Array.from(root.querySelectorAll(sectionIds.map(id => `#${id}`).join(',')));
    const visibleSections = new Set();
    activeObserver = new IntersectionObserver(entries => {
      entries.forEach(item => {
        if (item.isIntersecting) visibleSections.add(item.target);
        else visibleSections.delete(item.target);
      });
      const active = sections.find(section => visibleSections.has(section));
      if (!active) return;
      root.querySelectorAll('.primary-nav a').forEach(link => {
        if (link.hash === `#${active.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-15% 0px -65% 0px' });
    sections.forEach(section => activeObserver.observe(section));
  }

  function preparePrint() {
    if (!printState) printState = new Map();
    root.querySelectorAll('details').forEach(details => {
      if (!printState.has(details)) printState.set(details, details.open);
      details.open = true;
    });
    root.querySelectorAll('video').forEach(video => video.pause());
  }

  function render(project) {
    stopContent();
    ensureJapaneseFont();
    root.innerHTML = project
      ? shell(language, window.PortfolioDetails.markup({ projectId: project.id, language, assetBaseURL }), 'main-content')
      : homeMarkup(language);
    root.dataset.renderedLang = language;
    document.documentElement.lang = language;
    const title = UI_COPY[language].pageTitle;
    document.title = project ? `${project.name} · ${title}` : `${document.body.dataset.designName ? `${document.body.dataset.designName} · ` : ''}${title}`;
    renderedRoute = project?.id || 'home';
    renderedLanguage = language;
    if (!project) attachHome();
    if (printState) preparePrint();
  }

  function focusTarget(target) {
    if (!target) return;
    if (!target.hasAttribute('tabindex')) {
      target.setAttribute('tabindex', '-1');
      target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
    }
    target.focus({ preventScroll: true });
  }

  function syncRoute({ initial = false, focus = false, smooth = false, restoreY } = {}) {
    cancelAnimationFrame(navigationFrame);
    locationURL = location.href;
    const hash = location.hash.slice(1);
    const project = projectForHash(hash);
    const route = project?.id || 'home';
    const changed = route !== renderedRoute || language !== renderedLanguage;
    if (changed) render(project);
    setMenuOpen(false);
    if (!changed && !hash && restoreY === undefined) return;
    navigationFrame = requestAnimationFrame(() => {
      if (restoreY !== undefined) {
        if (focus) focusTarget(root.querySelector('#main-content'));
        window.scrollTo({ top: restoreY, behavior: 'instant' });
        return;
      }
      if (project) {
        if (focus) focusTarget(root.querySelector('#main-content'));
        if (changed || initial) window.scrollTo({ top: 0, behavior: 'instant' });
        return;
      }
      const target = hash ? document.getElementById(hash) : null;
      if (target && root.contains(target)) {
        if (focus) focusTarget(target);
        target.scrollIntoView({ block: 'start', behavior: smooth && !reducedMotion.matches ? 'smooth' : 'instant' });
      } else if (changed || initial) {
        if (focus) focusTarget(root.querySelector('#main-content'));
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    });
  }

  function setLanguage(nextLanguage) {
    if (!Object.hasOwn(languages, nextLanguage) || nextLanguage === language) return;
    cancelAnimationFrame(navigationFrame);
    const oldY = window.scrollY;
    const menuOpen = root.querySelector('.menu-toggle').getAttribute('aria-expanded') === 'true';
    language = nextLanguage;
    try { localStorage.setItem('jw-lang', language); } catch (error) { /* Language selection still works without storage. */ }
    render(projectForHash(location.hash.slice(1)));
    if (menuOpen && getComputedStyle(root.querySelector('.menu-toggle')).display !== 'none') setMenuOpen(true);
    const selectedLanguage = root.querySelector(`[data-language="${language}"]`);
    const focus = selectedLanguage.getClientRects().length ? selectedLanguage : root.querySelector('.menu-toggle');
    focus.focus({ preventScroll: true });
    window.scrollTo({ top: oldY, behavior: 'instant' });
  }

  root.addEventListener('click', event => {
    const languageButton = event.target.closest('[data-language]');
    if (languageButton) {
      setLanguage(languageButton.dataset.language);
      return;
    }
    const menu = root.querySelector('.menu-toggle');
    if (event.target.closest('.menu-toggle')) {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      setMenuOpen(open);
      return;
    }
    const anchor = event.target.closest('a[href]');
    if (!anchor || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || anchor.hasAttribute('download') || (anchor.target && anchor.target !== '_self')) return;
    const url = new URL(anchor.href);
    const sameDocument = url.pathname === location.pathname && url.search === location.search;
    const canonicalPage = url.pathname === indexURL.pathname && !url.search;
    if (url.origin !== location.origin || (!sameDocument && !canonicalPage) || !url.hash) return;
    const hash = url.hash.slice(1);
    if (!projectForHash(hash) && !/^sec-/.test(hash) && hash !== 'main-content') return;
    event.preventDefault();
    if (hash === 'main-content') {
      setMenuOpen(false);
      const main = root.querySelector('#main-content');
      focusTarget(main);
      main.scrollIntoView({ block: 'start', behavior: 'instant' });
      return;
    }
    if (location.hash !== url.hash) {
      savePosition();
      entry = newEntry();
      history.pushState({ portfolioNavigation: entry }, '', url.hash);
    }
    syncRoute({ focus: true, smooth: true });
  });

  root.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const menu = root.querySelector('.menu-toggle');
    if (menu?.getAttribute('aria-expanded') !== 'true') return;
    setMenuOpen(false);
    menu.focus();
  });
  const onLocationChange = event => {
    const destination = history.state?.portfolioNavigation;
    if (locationURL === location.href && destination?.id === entry.id) return;
    positions.set(entry.id, window.scrollY);
    if (event.type === 'popstate' && destination && destination.id !== entry.id) {
      entry = destination;
      syncRoute({ focus: true, restoreY: positions.get(entry.id) ?? entry.scrollY });
    } else {
      entry = newEntry();
      history.replaceState({ ...history.state, portfolioNavigation: entry }, '');
      syncRoute({ focus: true });
    }
  };
  window.addEventListener('hashchange', onLocationChange);
  window.addEventListener('popstate', onLocationChange);
  window.addEventListener('pagehide', () => {
    savePosition();
    // Reload can snapshot history.state before pagehide; carry the live reading position separately.
    try { sessionStorage.setItem(`jw-scroll:${entry.id}`, String(entry.scrollY)); } catch (error) { /* History still works without storage. */ }
  });
  window.addEventListener('resize', () => {
    if (getComputedStyle(root.querySelector('.menu-toggle')).display === 'none') setMenuOpen(false);
  });
  window.addEventListener('beforeprint', preparePrint);
  window.addEventListener('afterprint', () => {
    printState?.forEach((open, details) => { details.open = open; });
    printState = undefined;
  });
  // Static Korean shells remain complete and readable when JavaScript is disabled.
  syncRoute({ initial: true, restoreY: initialScrollY });
})();
