const fruits = ["Banana","Orange","Mango","Grapes"];


fruits.forEach(function(ftr) {
    console.log(fruits);
})

const numbers = [1,2,3,4,5];

numbers.forEach(function(nmb) {
    console.log(numbers);
})

const animals = ["Dog","Cat","Rabbit"];

animals.forEach(function(animal) {
    console.log("Joshua has a " + animal);
})

const orders = [
    { customer: "Joshua", quantity: 100 },
    { customer: "Mark", quantity: 250 },
    { customer: "Sarah", quantity: 500 }
];


const process = orders.forEach(function(odr) {
    console.log(odr.customer + " ordered " + odr.quantity);
})

const orders1 = [
    { customer: "Joshua", quantity: 100, price: 50 },
    { customer: "Mark", quantity: 200, price: 30 },
    { customer: "Sarah", quantity: 50, price: 100 },
    { customer: "Daniel", quantity: 20, price: 50 }
];

orders1.forEach(function(ord) {
    const total = ord.price * ord.quantity;

    if(total >= 5000) {
        console.log(ord.customer + ":" + total);
    }
    
})