const studentForm = document.getElementById("student-form");
const notifier = document.getElementById("notifier");
const studentName = document.getElementById("student-name");
const studentCourse = document.getElementById("student-course");
const list = document.getElementById("student-list");
const studentList = [
    {id: 1, name: "Joshua", course: "BSIT"}
];

studentForm.addEventListener("submit",function(event) {
    event.preventDefault();

    const stName = studentName.value.trim();
    const stCourse = studentCourse.value.trim();
    
    if(stName === "" && stCourse === "") {
        alert("Both fields are required to be filled out.");
        return;
    }

    if(stName === "") {
        alert("student name is required to be filled out.");
        return;
    }

    if(stCourse === "") {
        alert("student course is required to be filled out.");
        return;
    }

    const newStudent = {
        id: studentList.length + 1,
        name: stName,
        course: stCourse
    }

    studentList.push(newStudent);
    loadStudent();

    const mappingTest = studentList.map(function(st) {
        return st;
    })

    console.log(mappingTest);

    notifier.textContent = `Successfully submitted form!\n
                            Student name: ${stName}\n
                            Student course: ${stCourse}`;

    studentForm.reset();
})

function loadStudent() {
    list.textContent = "";
    for(const l of studentList) {
        const li = document.createElement("li");
        const edit = document.createElement("button");
        edit.textContent = "Edit";
        li.textContent = `${l.id} - ${l.name} - ${l.course}`;
        li.appendChild(edit);
        list.appendChild(li);
    }
}

loadStudent();






