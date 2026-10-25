const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");

const message1 = document.getElementById("message1");
const message2 = document.getElementById("message2");

const heading = document.getElementById("main-heading");

const profileCard = document.querySelector(".profile-card");
let isWhite = false;
button1.addEventListener("click", function() {
    message1.textContent = "Welcome to my profile!";
})

button2.addEventListener("click", function() {
    message2.textContent = "I'm becoming a web developer!";
})

button3.addEventListener("click", function() {
    if(!isWhite) {
        heading.style.color = "black";
    }
    else {
        heading.style.color = "white";
    }
    isWhite = !isWhite;
})

button4.addEventListener("click", function() {
    profileCard.classList.toggle("dark-mode");
})


