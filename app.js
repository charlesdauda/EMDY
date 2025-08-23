const menuBtn = document.querySelector('.menu-btn i');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');

  // Switch icon
  if (nav.classList.contains('active')) {
    menuBtn.classList.replace('ri-menu-line', 'ri-close-line');
  } else {
    menuBtn.classList.replace('ri-close-line', 'ri-menu-line');
  }
});

// Close menu when link clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuBtn.classList.replace('ri-close-line', 'ri-menu-line');
  });
});

