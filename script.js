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


// Loader delay (20 seconds)
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.display = 'none';
  }, 20000); // 20 seconds
});