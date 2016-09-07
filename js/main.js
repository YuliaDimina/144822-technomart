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