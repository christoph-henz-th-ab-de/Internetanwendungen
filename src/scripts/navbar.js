const navbar = document.querySelector('.navbar');
let lastScrollY = window.pageYOffset;

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;

  if (scrollY > lastScrollY) {
    navbar.classList.add('hidden');
  } else {
    navbar.classList.remove('hidden');
  }

  lastScrollY = scrollY;
});