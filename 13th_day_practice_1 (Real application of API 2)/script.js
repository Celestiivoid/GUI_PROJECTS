
const button = document.getElementById("refresh");

const inr = document.getElementById("inner");
inr.innerHTML = "<strong>Hello, user!</strong>";

const prd = document.getElementById("productList");

async function loadProducts() {
    button.disabled = true;
    prd.textContent = "Loading Products...";

    /* BASIC API LOGIC */

    try {
        const response = await fetch("./products.json");

        if (!response.ok) {
            throw new Error("Failed to load products!");
        }

        const prod = await response.json();

        if (prod.length === 0) {
            prd.textContent = "No products found.";
            return;
        }

        prd.textContent = "";

        for (const pro of prod) {
            const li = document.createElement("li");
            li.textContent = `${pro.name} - ₱${pro.price}`;
            prd.appendChild(li);
        }
    } catch (error) {
        if(error instanceof TypeError) {
            prd.textContent = `Please check your internet connection.`;
        } else {
            prd.textContent = `Error loading products: ${error.message}`;
        }
    } finally {
        button.disabled = false;
    }

    /* BASIC API LOGIC */
}

button.addEventListener("click",loadProducts);

/* const students = [
    {name: "Joshua", age: 19},
    {name: "Pearl", age: 19}
];

const list = document.getElementById("productList");

for(const l of students) {
    const li = document.createElement("li");
    li.textContent = l.name;
    list.appendChild(li);
} */

/* REUSABLE API */

async function fetchData(url) {
    const response = await fetch(url);

    if(!response.ok) {
        throw new Error("Failed to fetch!");
    }

    return await response.json();
}

const datas = await fetchData("./products.json");