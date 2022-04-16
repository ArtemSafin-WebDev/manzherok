export default function events() {
    const elements = Array.from(document.querySelectorAll('.js-events'));

    elements.forEach(element => {
        const categoriesBtns = Array.from(element.querySelectorAll('.activities__top-categories-link'));

        const checkboxes = Array.from(element.querySelectorAll('.activities__filters-checkbox-input'));

        const items = Array.from(element.querySelectorAll('.activities__events-list-item'));

        const filter = () => {
            let activeCheckboxes = checkboxes.filter(box => {
                if (!box.disabled && box.checked) {
                    return true;
                } else {
                    return false;
                }
            });

            if (!activeCheckboxes.length) {
                activeCheckboxes = checkboxes.filter(box => !box.disabled);
            }

            const activeMonths = activeCheckboxes.map(box => box.value);

            items.forEach(item => {
                if (!item.hasAttribute('data-month') || activeMonths.includes(item.getAttribute('data-month'))) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            })

        
            console.log('Active months', activeMonths);
        };

        categoriesBtns.forEach(btn => {
            btn.addEventListener('click', event => {
                event.preventDefault();

                categoriesBtns.forEach(btn => btn.classList.remove('active'));
                btn.classList.add('active');

                if (btn.hasAttribute('data-season')) {
                    const season = btn.getAttribute('data-season');

                    checkboxes.forEach(box => {
                        if (box.getAttribute('data-season') === season) {
                            box.disabled = false;
                        } else {
                            box.disabled = true;
                            box.checked = false;
                        }
                    });
                } else {
                    checkboxes.forEach(box => (box.disabled = false));
                    checkboxes.forEach(box => (box.checked = false));
                }

                filter();
            });
        });

        if (categoriesBtns.length) {
            categoriesBtns[0].click();
        }

        checkboxes.forEach(box => {
            box.addEventListener('change', () => {
                filter();
            });
        });

        filter();
    });
}
