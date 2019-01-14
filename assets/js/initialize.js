$(document).ready(function() {
    $('.carousel').carousel({interval: 0,ride: 'true',touch: true});
    $('#phone').mask('(00) 00000-0000');
});

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}