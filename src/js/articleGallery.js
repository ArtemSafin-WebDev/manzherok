import { Swiper, Thumbs, Navigation, Pagination } from 'swiper';

Swiper.use([Thumbs, Navigation, Pagination]);

export default function articleGallery() {
    const elements = Array.from(document.querySelectorAll('.js-article-gallery'));

    elements.forEach(element => {
        const mainContainer = element.querySelector('.article-gallery__slider-main .swiper-container');
        const thumbsContainer = element.querySelector('.article-gallery__slider-thumbs .swiper-container');
        const mainSliderOptions = {
            watchOverflow: true,
            spaceBetween: 0,
            thumbs: {},
            speed: 500,
            navigation: {
                nextEl: element.querySelector('.slider-arrow--next'),
                prevEl: element.querySelector('.slider-arrow--prev')
            }
        };

        mainSliderOptions.thumbs.swiper = new Swiper(thumbsContainer, {
            watchOverflow: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            slidesPerView: 'auto',
            threshold: 10,
            speed: 500,
            slideToClickedSlide: true,
            spaceBetween: 10,
            centerInsufficientSlides: true,
            breakpoints: {
                641: {
                    spaceBetween: 20,
                }
            }
        });

        new Swiper(mainContainer, mainSliderOptions);
    });
}
