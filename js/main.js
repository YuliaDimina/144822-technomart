var servicesItem = document.querySelectorAll(".services__menu-item"); // returns array of elemnts

for (var i = 0; i < servicesItem.length; i++) {
    servicesItem[i].addEventListener("click", function () {
        clearTabs();
        this.className += " active-item"; //don't forget space before added class to avoid collision
        document.getElementById(this.getAttribute("data-tab")).className += ' show-item';
    });
}

function clearTabs() {
    var tab = null;
    for (var i = 0; i < servicesItem.length; i++) {
        servicesItem[i].className = servicesItem[i].className.replace("active-item", "");
        //hide tabs
        tab = document.getElementById(servicesItem[i].getAttribute("data-tab"));
        tab.className = tab.className.replace('show-item', '');
    }
}

//=====Работа модального окна =====

(function () {
    var link = document.querySelector(".letter-button");

    var popup = document.querySelector(".modal-window");
    var close = popup.querySelector(".modal-window-close");
    var username = popup.querySelector("[name=user-name]");
    var usermail = popup.querySelector("[name=user-mail]");
    var usertext = popup.querySelector("[name=user-text]");
    var modalform = document.querySelector(".modal-window form");
    var storage = localStorage.getItem("name-in-storage");

    link.addEventListener("click", function (event) {
        event.preventDefault();
        popup.classList.add("modal-window-show");
        if (storage) {
            username.value = storage;
            usermail.focus();
        } else {
            username.focus();
        }
    });
    close.addEventListener("click", function (event) {
        event.preventDefault();
        popup.classList.remove("modal-window-show");
        popup.classList.remove("modal-error");
    });
    modalform.addEventListener("submit", function (event) {
        if (!username.value || !usermail.value || !usertext.value) {
            event.preventDefault();
            popup.classList.remove("modal-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("modal-error");
            console.log("Нужно ввести имя и адрес электронной почты");
        } else {
            localStorage.setItem("name-in-storage", username.value);
        }
    });
    window.addEventListener("keydown", function (event) {
        if (event.keyCode === 27) {
            if (popup.classList.contains("modal-window-show")) {
                popup.classList.remove("modal-window-show");
                popup.classList.remove("modal-error");
            }
        }
    });
})()


//=====Гугл-карта=====


google.maps.event.addDomListener(window, 'load', init);

function init() {

    var mapOptions = {

        zoom: 13,

        center: new google.maps.LatLng(59.9387942, 30.323083300000008),

        styles: [{
            "featureType": "all",
            "elementType": "labels.text",
            "stylers": [{
                "weight": "1.00"
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#ff0000"
            }, {
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#444444"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "color": "#f2f2f2"
            }]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 45
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text",
            "stylers": [{
                "color": "#ee3643"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#ee3643"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#ee3643"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "color": "#32425c"
            }, {
                "visibility": "on"
            }]
        }]
    };

    var mapElement = document.getElementById('map');

    var image1 = new google.maps.MarkerImage(
        'img/marker1.png',
        new google.maps.Size(50, 50),
        new google.maps.Point(0, 0),
        new google.maps.Point(20, 20)
    );


    var map = new google.maps.Map(mapElement, mapOptions);

    var marker1 = new google.maps.Marker({
        draggable: false,
        raiseOnDrag: false,
        position: new google.maps.LatLng(59.9387942, 30.323083300000008),
        icon: image1,
        map: map,
        title: 'Маленькая, но гордая дизайн-студия из Краснодара'
    });

}