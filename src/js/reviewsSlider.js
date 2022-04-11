import { Swiper, Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export default function reviewsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-reviews-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 3,
            watchOverflow: true,
            spaceBetween: 30,
            speed: 500,
            navigation: {
                nextEl: element.querySelector('.slider-arrow--next'),
                prevEl: element.querySelector('.slider-arrow--prev')
            }
        })
    })
}