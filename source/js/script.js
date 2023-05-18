const mainNav = document.querySelector('.main-nav');
const menuButton = document.querySelector('.main-nav__toggle');
const promoButton = document.querySelector('.promo__button-card');
const modal = document.querySelector('.modal');
const modalButton = document.querySelector('.modal__button');



mainNav.classList.add('main-nav--js');
mainNav.classList.add('main-nav--close');

menuButton.addEventListener('click', () => {
    mainNav.classList.toggle('main-nav--close');
});


if (promoButton) {
    promoButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        modal.classList.remove('modal--close');
    });
}

if (modalButton) {
    modalButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        modal.classList.add('modal--close');
    })
}
