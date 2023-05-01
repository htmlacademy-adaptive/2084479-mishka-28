const mainNav = document.querySelector('.main-nav');
const menuButton = document.querySelector('.main-nav__toggle');

mainNav.classList.add('main-nav--js');
mainNav.classList.add('main-nav--close');

menuButton.addEventListener('click', () => {
    mainNav.classList.toggle('main-nav--close');
});