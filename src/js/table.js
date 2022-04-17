import Hammer from 'hammerjs';


export default function table() {
    const scrollableTables = Array.from(document.querySelectorAll('.js-scrollable-table'));

    scrollableTables.forEach(element => {
        const wrapper = element.querySelector('.prices__accordion-table-wrapper');

        if (window.matchMedia('(max-width:640px)').matches) return;

        const hammertime = new Hammer(wrapper);

        let startX = 0;
        hammertime.on('panstart', function(event) {
            startX = wrapper.scrollLeft;
        });
        hammertime.on('panmove', function(event) {
            wrapper.scrollLeft = Math.floor(startX - event.deltaX);
        });
    });
}
