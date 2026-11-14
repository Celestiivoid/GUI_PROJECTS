try {
    console.log("Starting program...");
    console.log(username);
} catch(error) {
    console.log("Error occured!");
} finally {
    console.log("Program finished!");
}

let age = 15;

/* if(age < 18) {
    throw new Error("Must be 18 or above!");
} */

try {
    throw new Error("Username is required!");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

/* let usernames = null

console.log(usernames.length); */

/* ================================================== */

function withdraw(amount) {
    if(amount <= 0) {
        throw new Error("Invalid amount!");
    }
    console.log("Withdraw successful!");
}

try {
    withdraw(-100);
} catch (error) {
    console.log(error.message);
}

/* ================================================== */

function register(username) {
    if(username === "") {
        throw new Error("Username field is required!");
    }
    console.log("Registration successful!");
}

try {
    register("")
} catch (error) {
    console.log("Error: " + error.message);
}

const students = {
    name: "Joshua",
    age: 19,
    department: "CITE"
};

console.table(students);