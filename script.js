// ===== Scroll-triggered Sticky Header Animation =====
// This script makes the header shrink and hide the avatar + socials
// while keeping the site title enclosed in an oblong-shaped header.

document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.contact-card');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 80) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }
  });
});
