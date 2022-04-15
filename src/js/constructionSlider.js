import { Swiper, Navigation, Pagination, Controller, EffectFade } from 'swiper';

Swiper.use([Navigation, Pagination, EffectFade, Controller]);

export default function constructionSlider() {
    const elements = Array.from(document.querySelectorAll('.js-construction-slider'));

    elements.forEach(element => {
        const mainContainer = element.querySelector('.about-construction__slider-main > .swiper-container');

        const mainSlider = new Swiper(mainContainer, {
            slidesPerView: 1,
            watchOverflow: true,
            spaceBetween: 0,
            speed: 500,
            navigation: {
                nextEl: element.querySelector('.slider-arrow--next'),
                prevEl: element.querySelector('.slider-arrow--prev')
            }
        });

        const innerContainer = element.querySelector('.about-construction__slider-inner > .swiper-container');

        const innerSlider = new Swiper(innerContainer, {
            slidesPerView: 1,
            speed: 500,
            effect: 'fade',
            allowTouchMove: false,
            fadeEffect: {
                crossFade: true
            }
        });

        mainSlider.controller.control = innerSlider;
    });
}
