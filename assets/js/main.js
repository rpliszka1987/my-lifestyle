
if (!localStorage.getItem("lifestyle-location")) {
    window.location = "./welcome.html";
}

function LoadContent(path, target) {
    fetch(path)
        .then(function(response) {
            if (response.ok) {
                response.text()
                    .then(function(text) {
                        $(target).html(text);
                    })
            }
    })
}

LoadContent("../content/contacts.html", "#contacts-content");
LoadContent("../content/tasks.html", "#tasks-content");
LoadContent("../content/shoppinglist.html", "#shopping-list-content");
LoadContent("../content/weather.html", "#weather-content");
LoadContent("../content/myarea.html", "#my-area-content");
