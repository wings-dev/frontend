// yandex map
var id = $("#contactMap").data('id');
var lat = $("#contactMap").data('lat');
var lng = $("#contactMap").data('lng');

if (typeof ymaps != "undefined") {
    ymaps.ready(function() {
        var myMap = new ymaps.Map(document.getElementById(id), {
                center: [lat, lng],
                zoom: 14
            }),
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
                iconImageHref: '/img/map_icon.png',
                iconImageSize: [30, 42],
                iconImageOffset: [-5, -38]
            });
        myMap.behaviors.disable('scrollZoom');
        myMap.geoObjects.add(myPlacemark);
    });
}