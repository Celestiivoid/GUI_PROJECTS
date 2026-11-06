//-----FOR-LOOPS-----//
const service = ["Sublimation", "Tarpaulin", "Documents"];

for(let i = 0; i < 5; i++) {
    console.log(i);
}

for(let i = 0; i < service.length; i++) {
    console.log(service[i]);
}

console.log("Total: " + service.length);

const numbers = [10,20,30,40];

for(let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}

const fruits = ["Banana","Apple","Mango"];
const original = fruits.length;

for(let i = 0; i < original; i++) {
    console.log(fruits[i]);
    fruits.push("Oranges");
}

console.log("Total after interation: " + fruits.length);

const number = [4,7,9,10,13,16,24];

for(let i = 0; i < number.length; i++) {
    if(number[i] > 10) {
        console.log(number[i]);
    }
}
//-----FOR-LOOPS-----//

//-----FOR-OF-LOOPS-----//
const services = ["Sublimation","Cup Printing","B&W"];

for(const svc of services) {
    console.log("Service: " + svc);
}

const n = [5,10,15,20];

for(const nu of n) {
    console.log(nu * 2);
}
//-----FOR-OF-LOOPS-----//
