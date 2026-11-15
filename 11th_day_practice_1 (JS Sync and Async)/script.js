/* SYNCHRONOUS */

console.log("");
console.log("Synchronous");
console.log("");

console.log("First");
console.log("Second");
console.log("Third");
console.log("Fourth");
console.log("Fifth");

/* ASYNCHRONOUS */

console.log("=========================");
console.log("");
console.log("Asynchronous");
console.log("");

setTimeout(function() {
    console.log("First");
},1000);

setTimeout(function() {
    console.log("Second");
},2000);

setTimeout(function() {
    console.log("Third");
},3000);

setTimeout(function() {
    console.log("Fourth");
},4000);

setTimeout(function() {
    console.log("Fifth");
}, 5000);

/* CALL BACK */

function greet(name) {
    console.log(`Hello, ${name}!`);
}

function processGreet(callback) {
    callback("Pearl");
}

processGreet(greet);

function calculate(number, callback) {
    callback(number + 2);
}

function display(value) {
    console.log(value * 2);
}

calculate(15,display);

/* CALL BACK DIRECTLY INSIDE A FUNCTION PARAMETER (ANONYMOUSE CALLBACK) */

function greetA(callback) {
    callback("Joshua");
}

greetA(function(name) {
    console.log(`Hello, ${name}!`);
});

function nums(number, callback) {
    callback(number);
}

nums(8, function (value) {
    console.log(value + 5);
})

/* CALL BACK WITH ARROW */

function process(callback) {
    callback("Joshua");
}

process((name) => {
    console.log(`Hello, ${name}!!!`);
})

function calc(number, callback) {
    callback(number);
}

calc(6,(number) => {
    console.log(number * number);
})


/* ASYNCHRONOUS CALL BACK */

console.log("Order placed!");

setTimeout(() => {
    console.log("food is being ready...");
},1000);

setTimeout(() => {
    console.log("Food is ready!");
},10000);


console.log("Start!");

setTimeout(() => {
    console.log(`Result: ${1000}ms`);
},0)

console.log("End!");

/* ASYNCHRONOUS MICROTASK */

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