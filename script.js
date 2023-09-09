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


const submitBtn = document.getElementsByClassName('sendnow')[0];

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let inputs = document.getElementById('contact-form').children;

    const formData = new FormData();

    for (let inp of inputs) {
        if (inp.nodeName !== "BUTTON")
            formData.append(inp.name, inp.value)
    }

    fetch('https://formspree.io/f/mvojrnlp', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            if (response.ok) {
                alert('Form submitted successfully!');

                for (let inp of inputs) {
                    console.log(inp.value)
                    if (inp.nodeName !== "BUTTON")
                        inp.value = "";
                }
            } else {
                alert('Form submission failed. Please try again.');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
});
