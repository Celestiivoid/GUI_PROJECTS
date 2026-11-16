/*
METHODS:
API - Application Programming Interface 
GET - Retrieve Data
POST - Create Data
PUT - Replace Existing Data
PATCH - Partially Update Existing Data
DELETE - Delete Data 
*/

/* STATUS CODE:
200 - OK
201 - CREATED
204 - NO CONTENT
400 - BAD REQUEST
401 - UNAUTHORIZED
403 - FORBIDDEN
404 - NOT FOUND
500 - INTERNAL SERVER ERROR
*/

/* api is the API route, products and number 15 is the resource path.
15 specifically is the target product. */

/* fetch("https://example.com/api/products/15", {
    method: "POST",
    header: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email: "test123@gmail.com"  
    })
});

const student = {
    name: "Joshua",
    age: 19
} */

/* Object -> JSON string */
/* const result1 = JSON.stringify(student); */

/* JSON string -> Object */
/* const result2 = JSON.parse(result1); */
/* 
async function registerStudent() {
    try {
        const response = await fetch("/api/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Joshua",
                age: 19
            })
        });

        if (!response.ok) {
            throw new Error("Registration failed!");
        }

        const result = await response.json();
        console.log(result);
        console.log(result.name);

    } catch (error) {
        console.log(error.message);
    }
} */

const list = [
    {
        name: "Joshua",
        age: 19
    },
    {
        name: "Pearl",
        age: 19
    }
];

for(const lt of list) {
    console.log(lt.name);
}

const student = list.map(st => {
    return st.name;
})

const products = [
    {
        name: "Keyboard",
        price: 2000
    },
    {
        name: "Mouse",
        price:1500
    },
    {
        name: "Monitor",
        price:5000
    }
];

const productList = products.map(pdt => {
    return pdt.name;
})

const double = products.map(pdt => pdt.price * 2);

console.log(double);
console.log(productList)