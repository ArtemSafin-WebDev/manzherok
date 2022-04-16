export default function reviewsShowMore() {
    const elements = Array.from(document.querySelectorAll('.reviews__slider-card-show-more'));

    elements.forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();

            element.parentElement.classList.add('text-shown');
            element.remove();
        });
    });
}
