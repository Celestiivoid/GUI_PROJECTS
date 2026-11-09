
/* ACCESS */

const test1 = {
    name: "Joshua",
    age: 19
};

console.log(test1.name); /* DOT NOTATION */
console.log(test1["age"]); /* BRACKET NOTATION */

/* MODIFICATION */

const test2 = {
    name: "Pearl",
    age: 19
}

test2.name = "Pearly";
test2["age"] = 20;
console.log(test2.name);
console.log(test2["age"]);

/* ADD */

const test3 = {
    name: "Joshua",
    age: 19
}

test3.gender = "Male";
test3["gender"] = "Male";

console.log(test3.gender);
console.log(test3["gender"]);

/* DELETE */

const test4 = {
    name: "Pearl",
    age: 19
};

delete test4.age;


console.log(test4);

/* NESTED OBJECTS */

const test5 = {
    name: "Joshua",
    age: 19,

    address: {
        city: "Cagayan de Oro City",
        provice: "Misamis Oriental",
        postal_code: "9000"
    }
}


console.log(test5.address.city);
console.log(test5.address.city = "Carmen");

/* ARRAYS INSIDE OBJECTS */

const test6 = {
    name: "Pearl",
    age: 19,
    hobbies: ["Reading","Cooking","Video Games"]
};

test6.hobbies.push("Outdoors activities");
test6.hobbies.push("poptest");
test6.hobbies.pop("poptest");
console.log(test6.hobbies)
console.log(test6.hobbies[0]);
console.log(test6.hobbies[1]);
console.log(test6.hobbies[2]);
console.log(test6.hobbies[3]);
console.log(test6.hobbies[4]);

/* OBJECTS INSIDE AN ARRAY */

const test7 = [
    {name: "Joshua", age: 18},
    {name: "Pearl", age: 19}
];

console.log(test7[0].name);
console.log(test7[1].name);

for(const ts7 of test7) {
    console.log("Name: " + ts7.name);
    console.log("Age: " + ts7.age);
}


const test8 = [
    {name: "Joshua", grade: 95},
    {name: "Pearl", grade: 100},
    {name: "Mike", grade: 75},
    {name: "James", grade: 65}
];

for(const ts8 of test8) {
    if(ts8.grade >= 90) {
        console.log("Name: " + ts8.name);
    }
}

const test9 = [
    {name: "Joshua", department: "CITE"},
    {name: "Pearl", department: "CITE"},
    {name: "Jessie", department: "CEA"},
    {name: "Mark", department: "COE"}
];

for(const ts9 of test9) {
    if(ts9.department === "CITE") {
        console.log("Name: " + ts9.name);
    }
}
