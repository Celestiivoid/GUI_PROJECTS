var user = "Developer";
async function greet() {
    return `Hello, ${user}!`;
}

greet().then((message) => {
    console.log(message);
})


async function mult() {
    return 18;
}

mult().then((num) => {
    console.log(num * 18);
})