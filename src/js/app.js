document.documentElement.classList.remove('no-js');

// **************** Burger menu ****************
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');
burger.addEventListener('click', () => {
    burger.classList.toggle('burger--opened');
    menu.classList.toggle('header__menu--opened')
});

// **************** Google Maps ****************
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
    apiKey: 'AIzaSyAr8e67FUhW-VqeiyYQc47kmDxv0355QBo',
    version: 'weekly',
});

const location = { lat: 34.85501086969696, lng: -111.76994471104268 };
let icon = "data:image/svg+xml,%3Csvg width='27' height='27' viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.5 27C20.9558 27 27 20.9558 27 13.5C27 6.04416 20.9558 0 13.5 0C6.04416 0 0 6.04416 0 13.5C0 20.9558 6.04416 27 13.5 27Z' fill='white'/%3E%3Cpath d='M13.5 21.9001C18.1392 21.9001 21.9 18.1393 21.9 13.5001C21.9 8.86091 18.1392 5.1001 13.5 5.1001C8.86078 5.1001 5.09998 8.86091 5.09998 13.5001C5.09998 18.1393 8.86078 21.9001 13.5 21.9001Z' fill='%2381B3D3'/%3E%3C/svg%3E%0A";

loader.load().then(() => {
    let map = new google.maps.Map(document.querySelector('.map'), {
        center: location,

        zoom: 8,
        disableDefaultUI: true,
        // mapTypeControl: false,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: icon
    });
});
