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

window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader-wrapper');
    if (loader) {
      loader.style.display = 'none';
    }
  }, 10000); // Adjust delay here (ms)
});