(function () {
  'use strict';

  const app = document.getElementById('app');
  const nav = document.querySelector('.nav');
  const navLinks = document.getElementById('nav-links');
  const navRight = document.getElementById('nav-right');
  const langSwitch = document.getElementById('lang-switch');
  const menuToggle = document.getElementById('menu-toggle');
  const scrollTop = document.getElementById('scroll-top');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const SEC_IDS = ['sec-about', 'sec-skills', 'sec-career', 'sec-projects', 'sec-blog', 'sec-contact'];
  const state = {
    lang: ['ko', 'en', 'ja'].includes(localStorage.getItem('jw-lang')) ? localStorage.getItem('jw-lang') : 'ko',
    view: 'home',
    pid: 'p1'
  };
  let typeTimer = null;
  let sectionObserver = null;

  const TECH_ICON_RULES = [
    { test: /^React(?:\s|$)/i, icons: ['react'] },
    { test: /^TypeScript(?:\s|$)/i, icons: ['typescript'] },
    { test: /^Vite(?:\s|$)/i, icons: ['vite'] },
    { test: /^TanStack Query(?:\s|$)/i, icons: ['tanstack'] },
    { test: /^Zustand$/i, label: 'ZS' },
    { test: /^Socket\.IO(?: Client)?$/i, icons: ['socketdotio'] },
    { test: /^Nivo$/i, label: 'NV' },
    { test: /^(?:Sass|SCSS)$/i, icons: ['sass'] },
    { test: /^Tailwind CSS$/i, icons: ['tailwindcss'] },
    { test: /^Node\.js$/i, icons: ['nodedotjs'] },
    { test: /^PostgreSQL$/i, icons: ['postgresql'] },
    { test: /^NGINX$/i, icons: ['nginx'] },
    { test: /^MCP · Agent Skills$/i, icons: ['agentskills'] },
    { test: /^Rust\/WASM ★$/i, icons: ['rust', 'webassembly'] },
    { test: /^Vitest$/i, icons: ['vitest'] },
    { test: /^Vercel$/i, icons: ['vercel'] },
    { test: /^Flask(?:\s|$)/i, icons: ['flask'] },
    { test: /^TensorFlow$/i, icons: ['tensorflow'] },
    { test: /^OpenCV$/i, icons: ['opencv'] },
    { test: /^Redis$/i, icons: ['redis'] },
    { test: /^MongoDB$/i, icons: ['mongodb'] },
    { test: /^TensorFlow · OpenCV$/i, icons: ['tensorflow', 'opencv'] },
    { test: /^Redis · MongoDB$/i, icons: ['redis', 'mongodb'] },
    { test: /^Next\.js$/i, icons: ['nextdotjs'] },
    { test: /^Clean Architecture$/i, label: 'CA' },
    { test: /^Framer Motion$/i, icons: ['framer'] }
  ];

  const t = () => I18N[state.lang];
  const ui = () => UI_COPY[state.lang];

  function getProjects() {
    const labels = LINK_LABELS[state.lang];
    return t().projects.map((project) => ({
      ...project,
      links: (LINKS[project.id] || []).map((link) => ({ ...link, label: labels[link.key] }))
    }));
  }

  function projectScene(id, label, shotIndex = 0) {
    const variant = shotIndex ? ` scene-shot-${shotIndex}` : '';
    if (id === 'p1') {
      return `<div class="pixel-scene scene-face${variant}" role="img" aria-label="${label}">
        <div class="scene-ui" aria-hidden="true"><span>AI CAM</span><span class="rec-dot"></span></div>
        <div class="pixel-face" aria-hidden="true"><i></i><i></i><b></b></div>
        <div class="emotion-chart" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
      </div>`;
    }
    if (id === 'p2') {
      return `<div class="pixel-scene scene-court${variant}" role="img" aria-label="${label}">
        <div class="scoreboard" aria-hidden="true"><span>LIVE</span><b>88 : 86</b></div>
        <div class="court-lines" aria-hidden="true"><i></i><b></b></div>
        <div class="pixel-ball" aria-hidden="true"></div>
      </div>`;
    }
    return `<div class="pixel-scene scene-diary${variant}" role="img" aria-label="${label}">
      <div class="pixel-moon" aria-hidden="true"></div>
      <div class="pixel-book" aria-hidden="true"><i></i><i></i></div>
      <div class="pixel-waves" aria-hidden="true"><i></i><i></i><i></i></div>
    </div>`;
  }

  function imageSlot(key, label, projectId, shotIndex = 0) {
    const src = IMAGES[key];
    const dimensions = IMAGE_DIMENSIONS[key];
    const sizeAttributes = dimensions ? `width="${dimensions[0]}" height="${dimensions[1]}"` : '';
    const imageClass = key === 'thumb-p1' ? ' img-logo-cover' : '';
    if (src) return `<img class="img-fill${imageClass}" src="${src}" alt="${label}" ${sizeAttributes} ${key === 'photo' ? 'fetchpriority="high"' : 'loading="lazy"'}>`;
    if (projectId) return projectScene(projectId, label, shotIndex);
    return `<div class="pixel-avatar" role="img" aria-label="${label}"><div aria-hidden="true"><i></i><b></b><span></span></div><small>PLAYER 01</small></div>`;
  }

  function techIcons(skill) {
    const rule = TECH_ICON_RULES.find((item) => item.test.test(skill));
    if (rule?.icons) return rule.icons.map((icon) =>
      `<img class="stack-icon stack-icon-image" src="assets/icons/tech/${icon}.svg" alt="" width="16" height="16" decoding="async">`
    ).join('');
    return `<span class="stack-icon stack-icon-fallback">${rule?.label || skill.slice(0, 2).toUpperCase()}</span>`;
  }

  function renderNav() {
    const copy = ui();
    document.querySelector('.skip-link').textContent = copy.skip;
    nav.setAttribute('aria-label', copy.navLabel);
    langSwitch.setAttribute('aria-label', copy.langLabel);
    menuToggle.setAttribute('aria-label', copy.menu);
    menuToggle.querySelector('.menu-label').textContent = copy.menu.toUpperCase();
    navLinks.innerHTML = t().nav.map((label, index) =>
      `<button type="button" data-jump="${SEC_IDS[index]}">${label}</button>`
    ).join('');
    langSwitch.innerHTML = ['ko', 'en', 'ja'].map((lang) =>
      `<button type="button" data-lang="${lang}" aria-pressed="${lang === state.lang}">${lang.toUpperCase()}</button>`
    ).join('');
  }

  function renderHome() {
    const tr = t();
    const copy = ui();
    const projects = getProjects();
    const statValues = [92, 95, 88];
    const stats = tr.statLabels.map((label, index) => `
      <li class="stat" style="--stat-value:${statValues[index]}%; --stat-delay:${index * 90}ms">
        <div class="stat-head"><span>${label}</span><span>${statValues[index]}/100</span></div>
        <div class="stat-bar" aria-hidden="true"><span class="stat-fill"></span></div>
      </li>`).join('');
    const chips = SKILLS.main.map((skill) => ({ label: skill, color: 'var(--cyan)' }))
      .concat(SKILLS.sub.map((skill) => ({ label: skill, color: 'var(--muted)' })))
      .concat([{ label: SKILLS.special, color: 'var(--green)' }])
      .map((skill) => `<li class="chip" style="--c:${skill.color}"><span class="stack-icons chip-icons" aria-hidden="true">${techIcons(skill.label)}</span><span>${skill.label}</span></li>`).join('');
    const careers = tr.careers.map((career, careerIndex) => {
      const companyId = `career-company-${careerIndex}`;
      const projectCountClass = career.projects.length > 1 ? 'career-card--multi' : 'career-card--single';
      const careerProjects = career.projects.map((project, projectIndex) => {
        const projectId = `career-project-${careerIndex}-${projectIndex}`;
        const contributions = project.contributions.map((contribution) => `
          <li class="contribution-log">
            <time class="contribution-date" datetime="${contribution.date.replace('.', '-')}"><span aria-hidden="true">◆</span> ${contribution.date}</time>
            <div class="contribution-copy"><strong class="contribution-title">${contribution.title}</strong><p class="contribution-desc">${contribution.desc}</p></div>
          </li>`).join('');
        return `<section class="career-project-card">
          <header class="career-project-head">
            <div class="career-project-heading"><span class="career-structure-label">${copy.careerMission}</span><h4 class="career-project-name" id="${projectId}">${project.name}</h4></div>
            ${project.period ? `<time class="career-project-period">${project.period}</time>` : ''}
          </header>
          <p class="career-project-desc">${project.desc}</p>
          <div class="career-log-label">${copy.careerLog}</div>
          <ol class="contribution-list">${contributions}</ol>
        </section>`;
      }).join('');
      return `<article class="career-card ${projectCountClass}" aria-labelledby="${companyId}">
        <header class="career-head">
          <div class="career-company-block"><span class="career-structure-label">${copy.careerChapter}</span><div class="career-title-row"><h3 class="career-company" id="${companyId}">${career.company}</h3><span class="career-role">${career.role}</span></div></div>
          <div class="career-period">${career.period}</div>
        </header>
        <div class="career-projects">${careerProjects}</div>
      </article>`;
    }).join('');
    const projectFiles = projects.map((project) => {
      const listCopy = project.list || {
        contribution: copy.hud[project.id][1],
        implementation: copy.hud[project.id][2]
      };
      const stackPreview = project.stack.slice(0, 3).map((skill) => `<li>${skill}</li>`).join('');
      return `<li class="mission-item">
        <a class="mission-row" href="#${project.id}">
          <figure class="mission-cover">${imageSlot(`thumb-${project.id}`, copy.imageLabels[project.id], project.id)}</figure>
          <div class="mission-main">
            <div class="mission-kicker"><span>${copy.missionFile}</span><span>${project.period}</span></div>
            <h3 class="mission-name">${project.name}</h3>
            <p class="mission-summary">${project.desc}</p>
            <dl class="mission-facts">
              <div><dt>${copy.projectContribution}</dt><dd>${listCopy.contribution}</dd></div>
              <div><dt>${copy.projectImplementation}</dt><dd>${listCopy.implementation}</dd></div>
            </dl>
          </div>
          <div class="mission-side">
            <span class="mission-team">${project.team}</span>
            <div><span class="mission-side-label">${copy.projectLoadout}</span><ul class="mission-stack" role="list">${stackPreview}</ul></div>
            <span class="mission-enter">${copy.openLog} ▶</span>
          </div>
        </a>
      </li>`;
    }).join('');
    const certs = tr.certs.map((cert) => `
      <li class="cert-card"><span class="cert-icon" aria-hidden="true">🎖</span><strong class="cert-name">${cert.name}</strong><span class="cert-meta">${cert.meta}</span></li>`).join('');

    app.innerHTML = `<div class="home">
      <header class="hero" id="sec-about">
        <div class="hero-copy"><p class="hero-tag">${tr.heroTag}</p><h1 class="hero-name"><span id="typed"></span><span class="cursor" aria-hidden="true"></span></h1><p class="hero-level">${tr.heroLevel}</p><p class="hero-intro">${tr.heroIntro}</p>
          <ul class="stats" aria-label="${tr.statLabels.join(', ')}">${stats}</ul>
        </div>
        <figure class="hero-photo"><div class="photo-frame"><div class="photo-slot">${imageSlot('photo', copy.imageLabels.photo)}</div></div><figcaption class="photo-caption">${tr.playerCaption}</figcaption></figure>
      </header>

      <section class="section section-minor" id="sec-skills" aria-labelledby="skills-title"><h2 class="section-title" id="skills-title">${tr.inventoryTitle}</h2><ul class="chips" role="list">${chips}</ul><p class="collab">${tr.collab}</p></section>
      <section class="section section-standard" id="sec-career" aria-labelledby="career-title"><h2 class="section-title" id="career-title">${tr.careerTitle}</h2><div class="careers">${careers}</div></section>
      <section class="section section-major" id="sec-projects" aria-labelledby="projects-title"><div class="project-section-head"><h2 class="section-title" id="projects-title">${tr.sideQuestTitle}</h2><p>${copy.projectGuide}</p></div><ul class="mission-list" role="list">${projectFiles}</ul></section>
      <section class="section section-minor" aria-labelledby="cert-title"><h2 class="section-title" id="cert-title">${tr.achieveTitle}</h2><ul class="cert-grid">${certs}</ul></section>
      <section class="section section-standard" id="sec-blog" aria-labelledby="blog-title"><div class="blog-head"><h2 class="section-title" id="blog-title">${tr.blogTitle}</h2></div><div class="blog-empty"><span class="empty-icon" aria-hidden="true">□</span><div><strong>${copy.blogEmptyTitle}</strong><p>${copy.blogEmptyDesc}</p></div><a class="empty-action" href="${CONTACT.blog.url}" target="_blank" rel="noopener">${copy.visitBlog} ↗</a></div></section>
      <section class="section section-major contact" id="sec-contact" aria-labelledby="contact-title"><h2 class="section-title" id="contact-title">${tr.contactTitle}</h2><div class="contact-box"><div><span class="contact-label">EMAIL</span><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></div><div><span class="contact-label">GITHUB</span><a href="${CONTACT.github.url}" target="_blank" rel="noopener">${CONTACT.github.label}</a></div><div><span class="contact-label">BLOG</span><a href="${CONTACT.blog.url}" target="_blank" rel="noopener">${CONTACT.blog.label}</a></div></div><footer class="footer"><span class="marker" aria-hidden="true">▶</span> ${tr.footer}</footer></section>
    </div>`;
    startTyping();
    observeSections();
  }

  function renderDetail() {
    const tr = t();
    const copy = ui();
    const projects = getProjects();
    const project = projects.find((item) => item.id === state.pid) || projects[0];
    const hud = copy.hud[project.id].map((value, index) => `<li><span>${copy.hudLabels[index]}</span><strong>${value}</strong></li>`).join('');
    const links = project.links.map((link) => `<a class="link-btn" href="${link.url}" target="_blank" rel="noopener">${link.icon} ${link.label} ↗</a>`).join('');
    const productCopy = project.productSummary
      ? `<ul class="text-list"><li>${project.productSummary}</li></ul>`
      : `<ul class="text-list">${project.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}</ul>`;
    const features = project.features.map((feature) => `<li class="feature"><strong class="feature-name">${feature.name}</strong><p class="feature-desc">${feature.desc}</p></li>`).join('');
    const roles = project.roles.map((role) => typeof role === 'string'
      ? `<li>${role}</li>`
      : `<li><strong>${role.title}</strong><p>${role.desc}</p></li>`).join('');
    const troubles = project.troubles.map((item) => `<li class="trouble"><strong class="trouble-problem"><span aria-hidden="true">⚠</span> ${item.problem}</strong><p class="trouble-solution"><span aria-hidden="true">→</span> ${item.solution}</p></li>`).join('');
    const stack = project.stack.map((skill) => `<li class="stack-chip"><span class="stack-icons" aria-hidden="true">${techIcons(skill)}</span><span>${skill}</span></li>`).join('');
    const groupedStack = project.stackGroups?.map((group) => `<div class="stack-group"><h3 class="case-subtitle">${group.name}</h3><ul class="stack-chips" role="list">${group.items.map((skill) => `<li class="stack-chip"><span class="stack-icons" aria-hidden="true">${techIcons(skill)}</span><span>${skill}</span></li>`).join('')}</ul></div>`).join('');
    const flow = (project.flow || []).map((step) => `<li><span>${step}</span></li>`).join('');
    const imageLabel = copy.imageLabels[project.id];
    const shotLabels = copy.shotLabels[project.id] || [imageLabel, imageLabel];
    const sourceNotice = project.verified ? '' : `<aside class="panel panel-todo">${tr.dTodo}</aside>`;

    document.title = `${project.name} | JOOWON.EXE`;
    app.innerHTML = `<article class="detail">
      <a class="btn-back" href="#">◀ ${tr.back}</a>
      <header class="detail-hero"><div class="detail-label">▶ ${tr.sideQuestLabel}</div><h1 class="detail-title">${project.name} ${project.badge}</h1><p class="detail-dek">${project.desc}</p><div class="detail-meta"><span>📅 ${project.period}</span><span>👥 ${project.team}</span></div><div class="detail-links">${links}</div></header>
      <section class="brief-hud" aria-labelledby="brief-title"><h2 id="brief-title">${copy.hudTitle}</h2><ul>${hud}</ul></section>
      <div class="case-log">
        <section class="case-section case-service" aria-labelledby="overview-title">
          <header class="case-section-head"><span class="case-step">01</span><h2 id="overview-title">${tr.dOverview}</h2></header>
          <div class="case-section-body">${productCopy}${flow ? `<h3 class="case-subtitle">${copy.flowTitle}</h3><ol class="service-flow">${flow}</ol>` : ''}<div class="case-subheading"><h3 class="case-subtitle">${tr.dShots}</h3><span>${project.verified ? copy.screenshotsReady : copy.screenshotsPending}</span></div><div class="shot-grid"><figure class="shot">${imageSlot(`shot-${project.id}-1`, shotLabels[0], project.id, 1)}<figcaption>${shotLabels[0]}</figcaption></figure><figure class="shot">${imageSlot(`shot-${project.id}-2`, shotLabels[1], project.id, 2)}<figcaption>${shotLabels[1]}</figcaption></figure></div><h3 class="case-subtitle">${tr.dFeatures}</h3><ul class="feature-grid">${features}</ul></div>
        </section>
        <section class="case-section" aria-labelledby="role-title">
          <header class="case-section-head"><span class="case-step">02</span><h2 id="role-title">${tr.dRole}</h2></header>
          <div class="case-section-body"><ul class="text-list contribution-list-detail">${roles}</ul></div>
        </section>
        <section class="case-section" aria-labelledby="trouble-title">
          <header class="case-section-head"><span class="case-step">03</span><h2 id="trouble-title">${tr.dTrouble}</h2></header>
          <div class="case-section-body"><ul class="troubles">${troubles}</ul></div>
        </section>
        <section class="case-section case-result" aria-labelledby="outcome-title">
          <header class="case-section-head"><span class="case-step">04</span><h2 id="outcome-title">${tr.dOutcome}</h2></header>
          <div class="case-section-body"><div class="outcome-callout"><span class="outcome-status">${copy.outcomeStatus}</span><p class="outcome-text">${project.outcome}</p></div></div>
        </section>
        <section class="case-section case-loadout${groupedStack ? ' has-stack-groups' : ''}" aria-labelledby="stack-title">
          <header class="case-section-head"><span class="case-step">05</span><h2 id="stack-title">${tr.dStack}</h2></header>
          <div class="case-section-body">${groupedStack || `<ul class="stack-chips" role="list">${stack}</ul>`}</div>
        </section>
      </div>
      ${sourceNotice}
      <nav class="detail-nav" aria-label="${tr.sideQuestTitle}"><button class="btn-pager" type="button" data-pager="prev">◀ ${tr.prev}</button><button class="btn-pager" type="button" data-pager="next">${tr.next} ▶</button></nav>
    </article>`;
  }

  function startTyping() {
    clearInterval(typeTimer);
    const target = document.getElementById('typed');
    if (!target) return;
    const name = t().heroName;
    if (reduceMotion.matches) {
      target.textContent = name;
      return;
    }
    target.textContent = '';
    let index = 0;
    typeTimer = window.setInterval(() => {
      index += 1;
      target.textContent = name.slice(0, index);
      if (index >= name.length) clearInterval(typeTimer);
    }, 110);
  }

  function observeSections() {
    sectionObserver?.disconnect();
    if (!('IntersectionObserver' in window)) return;
    sectionObserver = new IntersectionObserver((entries) => {
      const active = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!active) return;
      navLinks.querySelectorAll('[data-jump]').forEach((button) => {
        if (button.dataset.jump === active.target.id) button.setAttribute('aria-current', 'true');
        else button.removeAttribute('aria-current');
      });
    }, { rootMargin: '-25% 0px -60%', threshold: [0, 0.1, 0.5] });
    SEC_IDS.map((id) => document.getElementById(id)).filter(Boolean).forEach((section) => sectionObserver.observe(section));
  }

  function render() {
    renderNav();
    if (state.view === 'detail') renderDetail();
    else {
      document.title = `JOOWON.EXE — ${t().heroName}`;
      renderHome();
    }
  }

  function closeMenu() {
    menuToggle.setAttribute('aria-expanded', 'false');
    navRight.classList.remove('is-open');
  }

  function setLang(lang) {
    try { localStorage.setItem('jw-lang', lang); } catch (error) { /* Storage can be unavailable in private contexts. */ }
    state.lang = lang;
    document.documentElement.lang = lang;
    render();
    closeMenu();
  }

  function jump(id) {
    const go = () => document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });
    closeMenu();
    if (state.view !== 'home') {
      history.pushState(null, '', location.pathname + location.search);
      state.view = 'home';
      render();
      requestAnimationFrame(go);
    } else go();
  }

  function onHash(shouldFocus = false) {
    const hash = (location.hash || '').slice(1);
    if (/^p[1-3]$/.test(hash)) {
      state.view = 'detail';
      state.pid = hash;
      render();
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
      state.view = 'home';
      render();
    }
    closeMenu();
    if (shouldFocus) requestAnimationFrame(() => {
      app.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  }

  document.addEventListener('click', (event) => {
    const jumpButton = event.target.closest('[data-jump]');
    if (jumpButton) { jump(jumpButton.dataset.jump); return; }
    const langButton = event.target.closest('[data-lang]');
    if (langButton) { setLang(langButton.dataset.lang); return; }
    const pagerButton = event.target.closest('[data-pager]');
    if (pagerButton) {
      const projects = t().projects;
      const index = projects.findIndex((project) => project.id === state.pid);
      const direction = pagerButton.dataset.pager === 'next' ? 1 : -1;
      location.hash = projects[(index + direction + projects.length) % projects.length].id;
    }
  });

  menuToggle.addEventListener('click', () => {
    const willOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(willOpen));
    navRight.classList.toggle('is-open', willOpen);
  });
  scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduceMotion.matches ? 'auto' : 'smooth' }));
  window.addEventListener('scroll', () => { scrollTop.hidden = window.scrollY < 600; }, { passive: true });
  window.addEventListener('hashchange', () => onHash(true));
  window.addEventListener('resize', () => { if (window.innerWidth > 720) closeMenu(); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuToggle.focus();
    }
  });

  scrollTop.hidden = true;
  document.documentElement.lang = state.lang;
  onHash(false);
})();
