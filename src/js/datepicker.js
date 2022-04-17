import 'bootstrap-datepicker';
import 'bootstrap-datepicker/js/locales/bootstrap-datepicker.ru';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export default function datepicker() {
    // const elements = Array.from(document.querySelectorAll('.js-datepicker'));

    // elements.forEach(element => {
    //     $(element)
    //         .datepicker({
    //             format: 'dd.mm.yyyy',
    //             container: element.hasAttribute('data-picker-container') ? element.getAttribute('data-picker-container') : '#picker-container',
    //             language: 'ru',
    //             autoclose: true,
    //             startDate: '+1d'
    //         })
    //         .on('show', function(e) {
    //             element.classList.add('datepicker-shown');
    //         })
    //         .on('hide', function(e) {
    //             element.classList.remove('datepicker-shown');
    //         });
    // });

    const from = document.querySelector('#from');
    const to = document.querySelector('#to');
    const startDate = document.querySelector('#start-date');
    const nights = document.querySelector('#nights');

    if (!from || !to) {
        return;
    }

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const weekLater = new Date(today);
    weekLater.setDate(today.getDate() + 7);

    function getDifference() {
        const date1 = dayjs(from.value, 'DD.MM.YYYY');
        const date2 = dayjs(to.value, 'DD.MM.YYYY');

        const difference = date2.diff(date1, 'day');

        console.log('Difference', difference);

        if (nights) {
            nights.value = difference;
        }
    }

    $(to)
        .datepicker({
            format: 'dd.mm.yyyy',
            container: to.hasAttribute('data-picker-container') ? to.getAttribute('data-picker-container') : '#picker-container',
            language: 'ru',
            autoclose: true,
            startDate: '+2d'
        })
        .on('show', function(e) {
            to.classList.add('datepicker-shown');
        })
        .on('hide', function(e) {
            to.classList.remove('datepicker-shown');
        });

    $(to).datepicker('setDate', weekLater);

    $(from)
        .datepicker({
            format: 'dd.mm.yyyy',
            container: from.hasAttribute('data-picker-container') ? from.getAttribute('data-picker-container') : '#picker-container',
            language: 'ru',
            autoclose: true,
            startDate: '+1d'
            // endDate: $(to).datepicker('getDate')
        })
        .on('show', function(e) {
            from.classList.add('datepicker-shown');
        })
        .on('hide', function(e) {
            from.classList.remove('datepicker-shown');
        })
        .on('changeDate', function(e) {
            const currentDate = e.date;
            const formattedDate = dayjs(currentDate).format('YYYY-MM-DD');
            if (startDate) {
                startDate.value = formattedDate;
            }

            $(to).datepicker(
                'setStartDate',
                dayjs(e.date)
                    .add(1, 'day')
                    .toDate()
            );

            const date1 = dayjs(from.value, 'DD.MM.YYYY');
            const date2 = dayjs(to.value, 'DD.MM.YYYY');

            const difference = date2.diff(date1, 'day');

            if (difference < 1) {
                $(to).datepicker('setDate', date1.add(1, 'day').toDate());
            }

            getDifference();

            $(from).trigger('blur');
        }).on('hide', function() {
            $(from).trigger('blur');
        });

    $(from).datepicker('setDate', tomorrow);

    $(to)
        .datepicker()
        .on('changeDate', function(e) {
            // $(from).datepicker(
            //     'setEndDate',
            //     dayjs(e.date)
            //         .subtract(1, 'day')
            //         .toDate()
            // );

            getDifference();

            $(to).trigger('blur');
        })
        .on('hide', function() {
            $(to).trigger('blur');
        });

    // $(from).datepicker(
    //     'setEndDate',
    //     dayjs($(to).datepicker('getDate'))
    //         .subtract(1, 'day')
    //         .toDate()
    // );

    getDifference();
}
