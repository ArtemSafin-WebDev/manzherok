export default function introFeatures() {
    const elements = Array.from(document.querySelectorAll('.intro__features-card'));
    const elementsCloseBtns = Array.from(document.querySelectorAll('.intro__features-card-dropdown-close'))

    elements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.classList.add('active');
        })

        element.addEventListener('mouseleave', () => {
            element.classList.remove('active');
        })

        element.addEventListener('click', event => {
            event.preventDefault();
            elements.forEach(element => element.classList.remove('active'));
            // element.classList.add('active');
        })

        document.addEventListener('click', event => {
            if (event.target.matches('.intro__features-card') || event.target.closest('.intro__features-card')) {
                const card = event.target.matches('.intro__features-card') ? event.target : event.target.closest('.intro__features-card');
                if (event.target.matches('.intro__features-card-dropdown-close') || event.target.closest('.intro__features-card-dropdown-close')) {
                    card.classList.remove('active');
                    return;
                } else {
                    card.classList.add('active');
                    return;
                }
            }

            elements.forEach(element => element.classList.remove('active'));
        })

        // elementsCloseBtns.forEach(btn => {
        //     btn.addEventListener('click', event => {
        //         event.preventDefault();
        //         btn.closest('.intro__features-card').classList.remove('active');
        //     })
        // })

        
    })
}