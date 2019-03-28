function initMap() {
  var lat = $('#addressMap').data("lat");
  var lng =  $('#addressMap').data("lon");
  var myLatLng = {lat: parseFloat(lat), lng: parseFloat(lng)};

  var map = new google.maps.Map(document.getElementById('addressMap'), {
    zoom: 15,
    center: myLatLng,
    scrollwheel: false
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}
initMap();
