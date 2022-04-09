


var searchBox;
var addressInput = document.getElementById("contact-mainaddress");

async function initAutocomplete() {

    searchBox = new google.maps.places.SearchBox(addressInput);

    searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();
        
        if (places.length < 1) {
            return;
        }

        localStorage.setItem("lifestyle-location", JSON.stringify(places[0]));

        window.location = "./index.html";
    });
}