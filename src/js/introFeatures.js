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
        })

        document.addEventListener('click', event => {
            if (event.target.matches('.intro__features-card') || event.target.closest('.intro__features-card')) {
                return;
            }

            elements.forEach(element => element.classList.remove('active'));
        })

        elementsCloseBtns.forEach(btn => {
            btn.addEventListener('click', event => {
                event.preventDefault();
                btn.closest('.intro__features-card').classList.remove('active');
            })
        })

        
    })
}