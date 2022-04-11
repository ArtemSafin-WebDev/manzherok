import { Swiper, Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export default function introSlider() {
    const elements = Array.from(document.querySelectorAll('.js-intro-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 1,
            watchOverflow: true,
            spaceBetween: 0,
            speed: 700,
            navigation: {
                nextEl: element.querySelector('.slider-arrow--next'),
                prevEl: element.querySelector('.slider-arrow--prev')
            }
        });
    });
}
