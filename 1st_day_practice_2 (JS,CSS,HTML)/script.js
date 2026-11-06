const button = document.getElementById("button1");
const message = document.getElementById("message1");

button.addEventListener("click", function () {
    message.textContent = "Hello, World!";
})