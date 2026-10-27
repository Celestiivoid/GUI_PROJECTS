const service = ["Tarpaulin","Cup printing","B&W"];

if(service.includes("B&W")) {
    console.log("Service is available!");
} else {
    console.log("Service not found!");
}

if(!service.includes("Blasting")) {
    console.log("Service not on the list.");
}

const hasTarp = service.includes("Tarpaulin");
console.log(hasTarp);

const ft = ["Mango","Banana","Apple"];

function ftsv(ftName) {
    if(ft.includes(ftName)) {
        console.log(ftName + " is on stock!");
    } else {
        console.log(ftName + " is not on stock!");
    }
}

ftsv("Mango");