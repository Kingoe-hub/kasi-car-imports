// Navbar mobile menu toggle functionality
const menu = document.getElementById('mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

// Optional: Close menu when a link is clicked (good UX for mobile)
document.querySelectorAll('.navbar__links').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 960) {
      menu.classList.remove('is-active');
      menuLinks.classList.remove('active');
    }
  });
});