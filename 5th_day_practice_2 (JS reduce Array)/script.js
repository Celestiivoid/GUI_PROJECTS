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