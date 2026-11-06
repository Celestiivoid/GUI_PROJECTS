const fruits = ["Mango","Banana","Orange"];

const index = fruits.indexOf("Banana");

if(index == -1) {
    console.log("Fruit not found!");
}
else {
    console.log("Fruit found!");
    console.log(fruits[index]);
    console.log(index + 1);
}

const names = ["Pearl","Joshua","Jethro","Gianne"];

function getNames(name) {
    const index = names.indexOf(name);

    if(index == -1) {
        console.log("Name does not exist.");
    } else {
        console.log(name + " is positioned at index: " + index);
    }
}

getNames("Joshua");
getNames("Vann");