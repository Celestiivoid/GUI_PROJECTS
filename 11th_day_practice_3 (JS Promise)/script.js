
/* ASYNCHRONOUS MICROTASK W PROMISE */

console.log("A");

Promise.resolve().then(() => {
    console.log("C");
})

setTimeout(() => {
    console.log("B");
},0);

console.log("D");

console.log("Start!");

setTimeout(() => {
    console.log("Out!");
},0);

Promise.resolve("Middle").then((message) => {
    console.log(message);
});

console.log("End");

/* PROMISE CHAINING */

Promise.resolve(5).then((number) => {
    return number * 2;
}).then((number) => {
    return number + 10;
}).then((number) => {
    return number * 5;
}).then((final) => {
    console.log(final);
})

/* Promise with error catch */

Promise.reject("Something went wrong!").catch((error) => {
    console.log("Error: " + error);
})

Promise.reject("Failed!").then((message) => {
    console.log("Success: " + message);
}).catch((error) => {
    console.log("Error: " + error );
});

Promise.reject("Shrinked!").then((message) => {
    console.log("Success: " + message);
}).catch((error) => {
    console.log("Failed: " + error);
}).finally(() => {
    console.log("Forge complete.");
})

/* Written promise */
const myPromise = new Promise((resolve, reject) => {
    resolve("Junk!");
})

myPromise.then((message) => {
    console.log("Success: " + message);
}).catch((error) => {
    console.log("Error: " + error);
});


/* Promise resolve and reject with condition */

function gradeChecker(grade) {
    return new Promise((resolve,reject) => {
        if(grade >= 90) {
            resolve("Passed with honors!!");
        } else if(grade >= 75) {
            resolve("Passed!");
        } else {
            reject("Failed!");
        }
    });
}

gradeChecker(89).then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Grade generation completed!");
})

function login(username,password) {
    return new Promise((reject, resolve) => {
        if(username === "admin" && password === "admin123") {
            resolve("Login successful!");
        } else {
            reject("Login unsucessful!");
        }
    });
}

login("admin","admin123").then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Login attempt successful.");
})