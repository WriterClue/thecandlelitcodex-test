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

    // Trigger all sections to pop in
    document.querySelectorAll('.pop-section').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 300); // staggered
    });

    // Reveal cards one by one
    const cards = document.querySelectorAll('.container');
    cards.forEach((card, i) => {
      setTimeout(() => card.classList.add('visible'), 1500 + i * 300);
    });

  }, 2000); // 2 second loader duration
});

// Scroll-triggered re-animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.pop-section, .container').forEach(el => {
  observer.observe(el);
});