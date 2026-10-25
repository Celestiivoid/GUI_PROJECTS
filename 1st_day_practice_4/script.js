const button = document.getElementById("greetButton");
const nameInput = document.getElementById("nameInput");
const message = document.getElementById("message");

button.addEventListener("click", function() {
    const name = nameInput.value;
    if(name.trim() === "") {
        message.textContent = "Enter a name first!";
    }
    else {
        message.textContent = "Hello, " + name + " this is my first web interactive project!";
    }
})

nameInput.addEventListener("keydown", function() {
    const name = nameInput.value;
    if(event.key === "Enter") {
        message.textContent = "Hello, " + name + " this is my first web interactive project!";
    }
})