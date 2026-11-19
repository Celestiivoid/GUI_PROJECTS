/* const button = document.getElementById("load-button");

async function loadUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/2");

        if(!response.ok) {
            throw new Error("Failed to load student.");
        }

        const user = await response.json();

        document.getElementById("student-name").textContent = user.name;
        document.getElementById("student-email").textContent = user.email;
        document.getElementById("username").textContent = user.username;
        document.getElementById("id").textContent = user.id;
    } catch (error) {
        console.log("Error: " + error);
    }
}

button.addEventListener("click",loadUser); */

const button = document.getElementById("load-button");

async function loadStudent() {
    const name = document.getElementById("student-name");

    try {
        button.disabled = true;
        button.textContent = "Loading...";
        name.textContent = "Loading student...";

        const response = await fetch("https://jsonplaceholder.typicode.com/users/2");

        if(!response.ok) {
            throw new Error("Failed to load student");
        }

        const load = await response.json();

        name.textContent = load.name;
    } catch (error) {
        name.textContent = error.message;
    } finally {
        button.disabled = false;
        button.textContent = "Load Student";
    }
}

button.addEventListener("click",loadStudent);

