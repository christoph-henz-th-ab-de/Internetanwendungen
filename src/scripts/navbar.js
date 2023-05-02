function hideNavbarOnScroll() {
  const navbar = document.querySelector('header');
  let lastScrollY = window.pageYOffset;

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const windowInnerHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const bottomOfPage = scrollY + windowInnerHeight >= documentHeight;

    if (scrollY > lastScrollY && !bottomOfPage) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }

    lastScrollY = scrollY;
  });
}

hideNavbarOnScroll();