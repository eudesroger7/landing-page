$(document).ready(function() {
    $('.carousel').carousel({interval: 0,ride: 'true',touch: true});
    $('#phone').mask('(00) 00000-0000');
});

var map;
var marker;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -8.0633253, lng: -34.8745272},
        zoom: 15
    });

    marker = new google.maps.Marker({
        position: {lat: -8.0633253, lng: -34.8745272},
        map: map,
        title: 'Jogga'
    });
}
