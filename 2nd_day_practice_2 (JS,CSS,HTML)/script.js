const nameInput = document.getElementById("nameInput");
const message = document.getElementById("message");

function validator() {
    const username = nameInput.value.trim();
    if(username === "") {
            message.textContent = "Please enter a username.";
    }
    else if(username.length < 3 || username.length > 15) {
        message.style.color = "red";
        message.textContent = "Username must contain 3-15 characters.";
    } else {
        message.style.color = "lightgreen";
        message.textContent = "Valid username!";
    }
}

nameInput.addEventListener("input", function() {
    validator();
})