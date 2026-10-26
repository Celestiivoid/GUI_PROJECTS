const service = ["Sublimation","B&W Printing","Cup Printing"];

service.push("Tarpaulin 4x3");
service.pop();

console.log(service[0]);
console.log(service[1]);
console.log(service[2]);
console.log(service[3]);
console.log(service.length);
console.log(service[service.length - 1]);

const fruits = ["Apple","Banana","Mango"];

fruits.pop();
fruits.push("Orange");

console.log(fruits);
console.log(fruits.length);