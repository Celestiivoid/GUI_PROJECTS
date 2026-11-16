/* HTTP Status:
   200 - OK - true
   201 - Created - true
   404 - Not Found - false
   500 - Server Error - false */

fetch("https://jsonplaceholder.typicode.com/users/1").then(
    (response) => {
        return response.json();
    }
).then((information) => {
    console.log(information);
})

async function loadUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if(!response.ok) {
        console.log("Failed to fetch user!");
    }
    
    const user = await response.json();

    console.log(user);
}

loadUser();

async function getUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/3");

    if(!response.ok) {
        throw new Error("User not found!");
    }

    const user = await response.json();

    console.log("Name: ", user.name);
}

getUser();