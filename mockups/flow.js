(() => {
  'use strict';
  const root = document.documentElement;
  const ax = document.querySelector('.ax-story');
  const product = document.querySelector('.product-story');
  const frames = Array.from(document.querySelectorAll('[data-frame]'));
  const controls = Array.from(document.querySelectorAll('[data-go]'));
  const count = document.getElementById('scene-number');
  const benchmark = document.querySelector('.screen-benchmark');
  const settings = document.querySelector('.screen-settings');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = window.matchMedia('(min-width: 701px)');
  const field = typeof window.createFlowField === 'function'
    ? window.createFlowField(document.getElementById('flow-field')) : null;
  let frame = null;
  let dirty = true;
  let enabled = false;
  let activeIndex = -1;
  let lastFieldProgress = -1;
  let axStart = 0;
  let axDistance = 1;
  let productStart = 0;
  let productDistance = 1;

  const clamp = (n) => Math.max(0, Math.min(1, n));
  const smooth = (n) => { const t = clamp(n); return t * t * (3 - 2 * t); };

  function setActive(index) {
    if (index === activeIndex) return;
    activeIndex = index;
    frames.forEach((element, i) => {
      element.classList.toggle('is-active', i === index);
      if (enabled) element.setAttribute('aria-hidden', String(i !== index));
      else element.removeAttribute('aria-hidden');
    });
    controls.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
    count.textContent = String(index + 1).padStart(2, '0');
  }

  function measure() {
    const canAnimate = Boolean(field) && !reduced.matches && window.innerHeight >= 620;
    if (canAnimate !== enabled) {
      enabled = canAnimate;
      root.classList.toggle('motion-ready', enabled);
      activeIndex = -1;
      lastFieldProgress = -1;
      if (!enabled) frames.forEach((element) => element.removeAttribute('aria-hidden'));
    }
    axStart = ax.getBoundingClientRect().top + window.scrollY;
    axDistance = Math.max(1, ax.offsetHeight - window.innerHeight);
    productStart = product.getBoundingClientRect().top + window.scrollY;
    productDistance = Math.max(1, product.offsetHeight - window.innerHeight);
    if (field) field.resize();
    dirty = false;
  }

  function update() {
    frame = null;
    if (dirty) measure();
    if (!enabled) {
      ax.style.setProperty('--ax-progress', '0');
      product.style.setProperty('--shot-progress', '0');
      setActive(0);
      frames.forEach((element) => element.removeAttribute('aria-hidden'));
      benchmark.removeAttribute('aria-hidden');
      settings.removeAttribute('aria-hidden');
      return;
    }
    const p = clamp((window.scrollY - axStart) / axDistance);
    ax.style.setProperty('--ax-progress', String(p));
    setActive(p < 0.32 ? 0 : p < 0.68 ? 1 : 2);
    if (p !== lastFieldProgress) {
      field.render(p);
      lastFieldProgress = p;
    }
    const shot = desktop.matches
      ? smooth(((window.scrollY - productStart) / productDistance - 0.16) / 0.68) : 0;
    product.style.setProperty('--shot-progress', String(shot));
    if (desktop.matches) {
      benchmark.setAttribute('aria-hidden', String(shot >= 0.5));
      settings.setAttribute('aria-hidden', String(shot < 0.5));
    } else {
      benchmark.removeAttribute('aria-hidden');
      settings.removeAttribute('aria-hidden');
    }
  }

  function schedule() {
    if (frame === null) frame = window.requestAnimationFrame(update);
  }
  function resize() { dirty = true; schedule(); }

  controls.forEach((button) => button.addEventListener('click', () => {
    if (!enabled) return;
    const stops = [0.05, 0.5, 0.96];
    const index = Number(button.dataset.go);
    window.scrollTo({ top: axStart + axDistance * stops[index], behavior: 'smooth' });
  }));
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('pageshow', resize);
  reduced.addEventListener('change', resize);
  desktop.addEventListener('change', resize);
  if (document.fonts) document.fonts.ready.then(resize);
  window.addEventListener('pagehide', (event) => {
    if (!event.persisted) {
      if (frame !== null) window.cancelAnimationFrame(frame);
      if (field) field.destroy();
    }
  });
  update();
})();
