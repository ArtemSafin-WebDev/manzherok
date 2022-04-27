export default function locationMap() {
    const elements = Array.from(document.querySelectorAll('.js-location-map'));

    elements.forEach(element => {
        ymaps.ready(initMap);
        const location = element.hasAttribute('data-location') ? element.getAttribute('data-location') : '';

        function initMap() {
            const from = element.getAttribute('data-from');
            const to = element.getAttribute('data-to');
            var myMap = new ymaps.Map(element, {
                center: location.split(','),
                zoom: 9,
                controls: ['routePanelControl']
            });

            // Получение ссылки на панель маршрутизации.
            var control = myMap.controls.get('routePanelControl');

            // Задание состояния для панели маршрутизации.
            control.routePanel.state.set({
                from,
                to,
               
            });

            control.options.set({
                autofocus: false
            });

            var multiRoutePromise = control.routePanel.getRouteAsync();

            multiRoutePromise.then(
                function(multiRoute) {
                    multiRoute.options.set({
                        // Цвет метки начальной точки.
                        wayPointStartIconFillColor: '#68B545',
                        // Цвет метки конечной точки.
                        wayPointFinishIconFillColor: '#68B545',
                        // Внешний вид линий (для всех маршрутов).
                        // Чтобы задать внешний вид линий активного маршрута,
                        // нужно использовать префикс 'routeActive'.
                        routeActiveStrokeColor: '#68B545'
                    });
                },
                function(err) {
                    console.log(err);
                }
            );
        }
    });
}
