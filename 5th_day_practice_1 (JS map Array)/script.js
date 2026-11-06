

/* MULTIPLICATION MAP */

const numbers = [2,4,6,8,10];

const doubled = numbers.map(function(db) {
    return db * 2;
})

console.log(doubled);


/* MULTIPLICATION UPPER CASING */

const names = ["joshua","mark","mike"];

const results = names.map(function(nm) {
    return nm.toUpperCase(nm);
})

console.log(results);

const orders = [
    { customer : "Joshua", quantity : 100 },
    { customer : "Mark", quantity : 200 },
    { customer : "Sarah", quantity : 300 }
];

const finding = orders.map(function(mp) {
    return mp.customer;
})

const mult = orders.map(function(mt) {
    return mt.quantity * 1.10;
})

console.log(finding);
console.log(mult);

const products = [
    { name: "T-Shirt", price: 250, quantity: 10 },
    { name: "Mug", price: 150, quantity: 20 },
    { name: "Tarpaulin", price: 500, quantity: 5 }
];

const prod = products.map(function(prd) {
    return {
        name: prd.name,
        totalValue: prd.price * prd.quantity
    };
})
const p = products.map(function(pr) {
    return {
        name: pr.name
    }
})
console.log(prod);
console.log(products[0].price);

