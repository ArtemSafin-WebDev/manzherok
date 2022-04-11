import { Swiper, Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export default function gallerySlider() {
    const elements = Array.from(document.querySelectorAll('.js-gallery-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 1,
            watchOverflow: true,
            spaceBetween: 0,
            speed: 500,
            navigation: {
                nextEl: element.querySelector('.slider-arrow--next'),
                prevEl: element.querySelector('.slider-arrow--prev')
            },
            pagination: {
                el: element.querySelector('.gallery__slider-pagination'),
                type: 'custom',
                renderCustom: function(swiper, current, total) {
                    return `${current.toString().padStart(2, "0")} <span class="gallery__slider-pagination-divider"> </span> ${total.toString().padStart(2, "0")}`
                }
            }
        });
    });
}


