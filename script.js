
// === Sticky Header Shrink on Scroll ===
document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.contact-card');
  const trigger = document.getElementById('header-trigger');

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        header.classList.remove('shrink');
      } else {
        header.classList.add('shrink');
      }
    },
    {
      root: null,
      threshold: 0,
    }
  );

  observer.observe(trigger);
});

// === Loader + Entrance Animations ===
window.addEventListener('load', () => {
  // --- [1] Delay Duration (in milliseconds)
  const delay = 3000; // 3 seconds

  setTimeout(() => {
    // --- [2] Remove Loader
    const loader = document.getElementById('loader-wrapper');
    if (loader) loader.remove();

    // --- [3] Pop-in Animation for `.pop-once` Elements
    const popElements = document.querySelectorAll('.pop-once');
    popElements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, i * 200); // Staggered animation
    });

    // --- [4] Fade in Background Image
    const bg = document.querySelector('.background-image');
    if (bg) bg.classList.add('visible');

  }, delay); // 👈 Delay before animations start
});