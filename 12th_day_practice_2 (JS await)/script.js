function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Joshua");
        },5000);
    });
}

async function loadUser() {
    console.log("Loading user...");

    const user = await fetchUser();

    console.log(`Welcome, ${user}!`);
}

loadUser();

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data loaded!");
        },2000);
    });
}

async function loader() {
    console.log("Loading data...");
    const result = await getData();
    console.log(`${result}`);
}

loader();




