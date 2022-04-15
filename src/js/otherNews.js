import { Swiper, Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export default function otherNews() {
    const elements = Array.from(document.querySelectorAll('.js-article-other-news'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 'auto',
            spaceBetween: 0,
            speed: 500,
            watchOverflow: true,
            navigation: {
                nextEl: element.querySelector('.article-other-news__arrow--next'),
                prevEl: element.querySelector('.article-other-news__arrow--prev')
            }
        })
    })
}
