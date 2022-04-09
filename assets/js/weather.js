var urlId = "bb2c88d223252f9cbf3c41f7d0c2aa16"
var testLocation = "Flushing";

// Get user lon and lat
function getUserLocation(location) {
    var apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + location + "&limit=1&appid=" + urlId;

    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                var locationLat = data[0].lat.toString();
                var locationLon = data[0].lon.toString();
            })
        } else {
            alert("Location not found.");
        }
    });
};

function getUserWeather(lat, lon) {

};

getUserLocation(testLocation);