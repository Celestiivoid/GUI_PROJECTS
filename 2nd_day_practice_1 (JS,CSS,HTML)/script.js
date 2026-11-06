const charInput = document.getElementById("charInput");
const message = document.getElementById("counter");


charInput.addEventListener("input", function() {
    if(charInput.value.length > 100) {
        message.textContent = "Warning!";
    }
    else {
        message.textContent = charInput.value.length + " characters";
    }
})