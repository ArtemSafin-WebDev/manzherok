export default function tabs() {
    const elements = Array.from(document.querySelectorAll('.js-tabs'));

    elements.forEach(element => {
        const btns = Array.from(element.querySelectorAll('.js-tabs-btn'));
        const items = Array.from(element.querySelectorAll('.js-tabs-item'));

        let initialActiveTabIndex = items.findIndex(item => item.classList.contains('active'));

        if (initialActiveTabIndex === -1) initialActiveTabIndex = 0;

        console.log('Initial index', initialActiveTabIndex)

        const setActiveTab = index => {
            btns.forEach(btn => btn.classList.remove('active'));
            items.forEach(item => item.classList.remove('active'));
            btns[index].classList.add('active');
            items[index].classList.add('active');
        };

        setActiveTab(initialActiveTabIndex);

        btns.forEach((btn, btnIndex) => {
            btn.addEventListener('click', event => {
                event.preventDefault();

                setActiveTab(btnIndex);
            });
        });
    });
}
