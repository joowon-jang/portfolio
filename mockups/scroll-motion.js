(() => {
  const tracks = Array.from(document.querySelectorAll('[data-motion-track]'));
  const reveals = Array.from(document.querySelectorAll('[data-reveal]'));
  const motionPreference = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : null;
  let observer = null;
  let frame = null;

  const show = (element) => element.classList.add('is-visible');

  function updateProgress() {
    frame = null;
    const reduced = motionPreference && motionPreference.matches;
    const viewportHeight = window.innerHeight;

    tracks.forEach((track) => {
      if (reduced) {
        track.style.setProperty('--progress', '0');
        return;
      }
      const rect = track.getBoundingClientRect();
      const distance = viewportHeight + rect.height;
      const progress = distance > 0 ? (viewportHeight - rect.top) / distance : 0;
      track.style.setProperty('--progress', String(Math.max(0, Math.min(1, progress))));
    });
  }

  function scheduleUpdate() {
    if (frame === null) frame = window.requestAnimationFrame(updateProgress);
  }

  function updateReveals() {
    if (observer) {
      observer.disconnect();
      observer = null;
    }

    if ((motionPreference && motionPreference.matches) || !('IntersectionObserver' in window)) {
      reveals.forEach(show);
      return;
    }

    observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          show(entry.target);
          currentObserver.unobserve(entry.target);
        }
      });
    });
    reveals.forEach((element) => {
      if (!element.classList.contains('is-visible')) observer.observe(element);
    });
  }

  function handleMotionChange() {
    updateReveals();
    scheduleUpdate();
  }

  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate, { passive: true });
  if (motionPreference) {
    if (motionPreference.addEventListener) {
      motionPreference.addEventListener('change', handleMotionChange);
    } else if (motionPreference.addListener) {
      motionPreference.addListener(handleMotionChange);
    }
  }
  updateReveals();
  updateProgress();
})();
