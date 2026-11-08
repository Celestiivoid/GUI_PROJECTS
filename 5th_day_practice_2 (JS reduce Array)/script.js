const prices = [100,200,300];


const rdc = prices.reduce(function(sm, pr) {
    return sm + pr;
});

console.log(rdc);

const numbers = [5,10,15,20,25,30,35,40,45,50];

const num = numbers.reduce(function(s,p) {
    return s + p
});

console.log(num);


const sales = [1500,300,4500,3000];

const sl = sales.reduce(function(s,p) {
    return s + p;
})

console.log("Total sales: $" + sl);

const orders = [
     { customer: "Joshua", amount: 1500, status: "Completed" },
    { customer: "Mark", amount: 800, status: "Completed" },
    { customer: "Sarah", amount: 2000, status: "Completed" },
    { customer: "Daniel", amount: 1200, status: "Completed" },
    { customer: "Kevin", amount: 500, status: "Completed" }
];

const totalRevenue = orders.reduce(function(total, order) {
    if(order.status === "Completed" && order.amount >= 1000) {
        return total + order.amount;
    }
    return total;
}, 0);

console.log("Total Revenue: $" + totalRevenue);


const nm1 = [10,15,20,25,30,35,40,45,50];

const results = nm1.filter(number => number >= 20).map(number => number * 2);

console.log(results);

const ord = [
    { customer: "Joshua", amount: 1500, status: "Completed" },
    { customer: "Mark", amount: 800, status: "Completed" },
    { customer: "Sarah", amount: 2000, status: "Pending" },
    { customer: "Daniel", amount: 1200, status: "Completed" },
    { customer: "Anna", amount: 500, status: "Pending" }
];

const ordr1 = ord.filter(function(od) {
    return od.status === "Completed";
}).map(function(od) {
    return od.customer;
});
