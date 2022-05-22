document.documentElement.classList.remove('no-js');


const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');
burger.addEventListener('click', () => {
    burger.classList.toggle('burger--opened');
    menu.classList.toggle('header__menu--opened')
});
