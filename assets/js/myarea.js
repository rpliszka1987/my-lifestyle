//This initializes the pop-up for the location
//Adding a map to locate local restaurants near me
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"> 
function initMap() {
    const map = new google.maps.Map(document.getElementById ("map"))
    var location = {lat: -73.8331, lng: 40.7675);
    var map = map = new google.maps.Map(
        document.getElementById("map"), 
        {center: location 
            zoom: 8});

    const request = {
        placeId: "ChIJP2PATQVgwokRHih0tNEk7Po"
    }
    infowindow = new google.maps.InfoWindow();

    map = new google.maps.Map(
        document.getElementById('map'), 

}