


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