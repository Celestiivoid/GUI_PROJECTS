const numbers = [10,15,20,25,30,35,40,45,50];

const results = numbers.find(function(number) {
    return number > 25;
});

console.log(results);

const info = [
    {name : "Joshua", age : 19},
    {name : "Pearl", age : 20},
    {name : "Patricia", age : 26}
];

const findName = "Joshua";

const result = info.find(function(names) {
    return names.name === findName;
});

console.log(result);


const products = [
    {name: "Keyboard", price: 3000},
    {name: "Mouse", price: 2500},
    {name: "Headphones", price: 2000}
];

function searchProduct(productName) {
    const rl = products.find(function(searching) {
        return searching.name === productName;
    });


    if(rl !== undefined) {
        console.log("Product found!");
        console.log("Product name: " + rl.name);
        console.log("Product price: " + rl.price);
    }
}

searchProduct("Mouse");






