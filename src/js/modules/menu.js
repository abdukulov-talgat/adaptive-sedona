export default function initBurger() {
    document.documentElement.classList.remove('no-js');

    const toggler = document.querySelector('.header__toggler');
    const headerNav = document.querySelector('.header__nav');
    toggler.addEventListener('click', () => {
        headerNav.classList.toggle('header__nav--show');
    });
}
