const student = new Map();

student.set("name","Joshua");
student.set("age",19);
student.set("Department","CITE");
student.set("Games","Roblox");

student.delete("Games");

console.log(student);
console.log(student.get("name"));
console.log(student.size);
console.log(student.has("name"));

for(const [key,value] of student) {
    console.log(`${key} - ${value}`);
}