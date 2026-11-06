



/* GENERAL FILTER */

const numbers = [11,12,13,14,15,16,17,18,19,20];

const result = numbers.filter(function(nm) {
    return nm >= 18;
})

console.log(result);




/* FILTER WITH INTERNAL VARIABLE NAMES */

const students = [
    {name : "Mike", grade : 71},
    {name : "Dejay", grade : 65},
    {name : "Joshua", grade : 90},
    {name : "Pearl", grade : 91}
];

const results = students.filter(function(sGrade) {
    return sGrade.grade >= 90;
})

const index = students.indexOf("Joshua");

console.log(results.length);
console.log(results);




/* FILTER WITH EXTERNAL VARIABLE NAME*/

const products = [
    { name: "Keyboard", price: 500 },
    { name: "Mouse", price: 300 },
    { name: "Monitor", price: 4500 },
    { name: "Headset", price: 1500 }
];

const minimumPrice = 1000;

const rl = products.filter(function(product) {
    return product.price >= minimumPrice;
});

console.log(rl);




/* FILTER WITH MULTIPLE CONDITIONS */

const student = [
    {name : "Mike", grade : 71, age : 18},
    {name : "Dejay", grade : 65, age : 18},
    {name : "Joshua", grade : 90, age : 19,},
    {name : "Pearl", grade : 91, age : 19}
];

const rls = student.filter(function(stud) {
    return stud.grade >= 90 && stud.age > 18;
})

console.log(rls);

const fruits = ["Banana","Apple","Grapes"];

const rt = fruits.filter(function(fr) {
    return fr.startsWith("A");
})

console.log(rt);




/* FUSION OF THE PRACTICES ABOVE */

const orders = [
    {name : "Joshua", quantity : 100, status: "Completed"},
    {name : "Pearl", quantity : 50, status: "Completed"},
    {name : "Mike", quantity : 200, status: "Pending"},
    {name : "James", quantity : 150, status: "Completed"},
    {name : "Jethro", quantity : 80, status: "Pending"},
    {name : "Gerald", quantity : 125, status: "Completed"},
    {name : "Dustin", quantity : 250, status: "Completed"}
]

const rts = orders.filter(function(odr) {
    return odr.quantity >= 100 && odr.status === "Completed";
})

console.log(rts.length);
console.log(rts[0]);
console.log(rts[1]);
console.log(rts[2]);
console.log(rts[3]);