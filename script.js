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

for (let item of menu.children) {
    item.addEventListener('click', (event) => {
        menu.classList.toggle("open");
    });
}

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch('https://github.com/sreekarteegala/portfolio-website/master', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            if (response.ok) {
                alert('Form submitted successfully!');
                e.target.reset();
            } else {
                alert('Form submission failed. Please try again.');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
});

