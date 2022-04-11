export default function guests() {
    const elements = Array.from(document.querySelectorAll('.js-guests'));

    elements.forEach(element => {
        const minus = element.querySelector('.js-guests-minus');
        const plus = element.querySelector('.js-guests-plus');
        const input = element.querySelector('.js-guests-input');

        const minValue = 1;

        console.log('Hello guests');

        const handleActivity = () => {
            if (input.value <= minValue) {
                input.value = minValue;
                minus.disabled = true;
            } else {
                minus.disabled = false;
            }
        };

        const dispatchEvent = () => {
            let evt = new Event('change', { bubbles: true, cancelable: false });
            input.dispatchEvent(evt);
        };

        const add = event => {
            event.preventDefault();
            let currentValue = Number(input.value.trim());
            input.value = ++currentValue;
            handleActivity();
            dispatchEvent();
        };
        const subtract = event => {
            event.preventDefault();
            let currentValue = Number(input.value.trim());
            input.value = --currentValue;
            handleActivity();
            dispatchEvent();
        };

        handleActivity();

        minus.addEventListener('click', subtract);
        plus.addEventListener('click', add);
    });
}
