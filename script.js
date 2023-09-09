"use strict";

let navItems = document.getElementsByTagName("navbar")[0].children;
console.log(navItems)

for (let item of navItems) {
    item.addEventListener('click', (event) => {
        console.log(event.target.style)
        event.target.style.top = "20%";
    })
}


var menuButton = document.getElementById("menuButton");
var menu = document.getElementById("menu");

menuButton.addEventListener("click", function () {
    menu.classList.toggle("open");
});
