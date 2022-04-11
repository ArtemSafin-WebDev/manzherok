import { Swiper, Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export default function pressCenterSlider() {
    const elements = Array.from(document.querySelectorAll('.js-press-center-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 'auto',
            watchOverflow: true,
            speed: 500
        })
    })
}