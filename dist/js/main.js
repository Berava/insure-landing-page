const burger = document.querySelector('.nav__burger');
const nav = document.querySelector('.nav__list');
const navItem = document.querySelectorAll('.nav__item');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav__list-active');
    // Animate Links
    navItem.forEach((link,index) => {
        if(link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
        }
    });
    // Burger animation
    burger.classList.toggle('toggle');
});

// Stop Animations During Window Resizing
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

