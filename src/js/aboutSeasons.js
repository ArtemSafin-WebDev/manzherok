export default function aboutSeasons() {
    const elements = Array.from(document.querySelectorAll('.js-about-seasons'));

    elements.forEach(element => {
        const cards = Array.from(element.querySelectorAll('.about-seasons__card'));

        const setActiveCard = index => {
            cards.forEach(card => card.classList.remove('active'));
            cards[index].classList.add('active');
        }

        if (cards.length) {
            setActiveCard(0);
        }

        cards.forEach((card, cardIndex) => {
            card.addEventListener('click', event => {
                event.preventDefault();
                setActiveCard(cardIndex);
            })
        })
    })
}