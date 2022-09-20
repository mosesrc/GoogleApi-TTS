var map;
var marker;
var image;
var contentString;
var infowindow;


var coords = {lat: 39.9612, lng: -82.9988}



function initMap() {
	contentString = '<h2>Columbus, OH</h2> <p>Where your dreams come true.</p>';
	
	image = {
		url: 'lit.jpg', 
		scaledSize: new google.maps.Size(50, 50)
	};
	
	map = new google.maps.Map(document.getElementById('map'), {
		center: coords,
		zoom: 10,
		scrollwheel: false
	});
	
	infowindow = new google.maps.InfoWindow({
		content: contentString
	});
	
	
	
	marker = new google.maps.Marker({
	position: coords,
	map: map,
	icon: image,
	animation: google.maps.Animation.BOUNCE
	});
	
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map, marker);
	});
	
}

