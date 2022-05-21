import { Loader } from '@googlemaps/js-api-loader';

export default function map() {
    const loader = new Loader({
        apiKey: 'AIzaSyAr8e67FUhW-VqeiyYQc47kmDxv0355QBo',
        version: 'weekly',
    });

    const location = { lat: 59.938788257570735, lng: 30.323044719309095 };
    let icon = document.documentElement.clientWidth < 768 ? '@img/map-pin-small.png' : '@img/map-pin-big.png'

    loader.load().then(() => {
        map = new google.maps.Map(document.querySelector('.footer__map'), {
            center: location,

            zoom: 16,
            disableDefaultUI: true,
            // mapTypeControl: false,
        });
        const marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: icon
        });
    });
}

//59.938788257570735, 30.323044719309095
