// Search form Open and Close

var link = document.querySelector(".btn-search");
var popup = document.querySelector(".search-form");

link.addEventListener("click", function(event) {
event.preventDefault();
    if (popup.classList.contains("search-form-show")) {
            popup.classList.remove("search-form-show");
          }
                      else { popup.classList.add("search-form-show");
}
});

window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) {
          if (popup.classList.contains("search-form-show")) {
            popup.classList.remove("search-form-show");
          }
        }
      });

// Map

var map;
function initialize() {
  var mapOptions = {
    zoom: 9,
    center: new google.maps.LatLng(34.7550348,-111.7362262)
  };
  map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);
  var myLatLng = new google.maps.LatLng(34.8650348,-111.7562262);
  var beachMarker = new google.maps.Marker( {
  	position: myLatLng,
  	map: map,
  });
}

google.maps.event.addDomListener(window, 'load', initialize);