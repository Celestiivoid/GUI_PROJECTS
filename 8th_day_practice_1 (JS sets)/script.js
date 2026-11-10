
/* sets */

const numbers = new Set([10,20,30,40,50]);

/* adding inside a set */

numbers.add(60);

/* removing inside a set */

numbers.delete(30);

/* checking inside a set */

console.log(numbers.has(70));

/* clears a set */
numbers.clear();

console.log(numbers);


/* looping inside a set */
const numbers2 = ([10,20,30,40,50]);

for(const nm of numbers2) {
    console.log(nm);
}
console.log("-------------------------")

for(const nm of numbers2) {
    console.log(nm * 3);
}

/* convertion of sets to array */

const numbers3 = ([10,20,30,40,50]);

const array1 = [...numbers3];
const array2 = Array.from(numbers3);

console.log(array1);
console.log(array2);

/* sets with conditions */

const number4 = new Set([50,60,70,80,90,100]);

const result = [...number4].filter(score => score >= 70).map(score => score + 5);

console.log(result);
console.log(number4.size);