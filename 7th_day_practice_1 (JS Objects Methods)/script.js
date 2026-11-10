const test1 = {
    name: "Joshua",
    age: 19,
    course: "BSIT",
    department: "CITE"
};

/* keys */

console.log(Object.keys(test1));

/* values */

console.log(Object.values(test1));

/* entries */

console.log(Object.entries(test1));

/* entries with for of loop */

for(const ts1 of Object.entries(test1)) {
    console.log(ts1);
}

/* entries with for of loop with key & values */

for(const [key, value] of Object.entries(test1)) {
    console.log(key + " , " + value);
}

/* key & values with template literals */

for(const [key, value] of Object.entries(test1)) {
    console.log(`${key} - ${value}`);
}

const entries = Object.entries(test1);

/* key & values with typeof */

for(const [key, value] of entries) {
    if(typeof value === "string") {
        console.log(`${key} : ${value}`);
    }
}