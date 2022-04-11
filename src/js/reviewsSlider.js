import { Swiper, Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export default function reviewsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-reviews-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: window.matchMedia('(max-width: 640px)').matches ? 'auto' : 3,
            spaceBetween: window.matchMedia('(max-width: 640px)').matches ? 0 : 30,
            watchOverflow: true,
            speed: 500,
            navigation: {
                nextEl: element.querySelector('.slider-arrow--next'),
                prevEl: element.querySelector('.slider-arrow--prev')
            }
        });
    });
}
