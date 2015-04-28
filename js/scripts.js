// Search form Appearance

var link = document.querySelector(".btn-search");
var popup = document.querySelector(".search-form");

link.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.add("search-form-show");
	});

// Map

var map;
function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(34.8210272,-111.615511)
  };
  map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);