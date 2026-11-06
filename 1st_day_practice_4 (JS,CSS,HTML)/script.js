const button = document.getElementById("greetButton");
const nameInput = document.getElementById("nameInput");
const message = document.getElementById("message");

function greetUser() {
    const name = nameInput.value.trim();

    if(name === "") {
        message.textContent = "Enter a name first!";
    } else {
        message.textContent ="Hello, " + name + " this is my first web interactive project!";
    }
}

button.addEventListener("click", function() {
    greetUser();
});

nameInput.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        greetUser();
    }
});