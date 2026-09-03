// const person = {
//     navn: "John John",
//     alder: 98,
//     by:"roskilde",
//     arbejde:"landmand"
// }

const person = {
    name: "John John",
    age: 98,
    city: "Roskilde",
    job: "farmer",
    male: true,
    pet: {
        type: "cat",
        name: "Jeff",
        age: 12,
    },
    hobbies: ["football", "cycling", "swimming"],
}

const students = [
    { name: "Sofie", age: 25, course: "Webudvikler" },
    { name: "Lukas", age: 20, course: "Mediegrafiker" },
    { name: "Emil", age: 28, course: "Teknisk Designer" },
]

const insertDOM = document.getElementById("insert")

// students.forEach(function (student) {
//     const message = `name: ${student.name}, Alder: ${student.age}, Uddannelse: ${student.course}`
//     const divElement = document.createElement("div")
//     divElement.classList.add("student")
//     
//     divElement.textContent = message
//     insertDOM.append(divElement)
// })

students.forEach(function(student){
    const studentHead = document.createElement("h2")
    const studentInfo = document.createElement("p")
    const divElement = document.createElement("div")
    divElement.classList.add("student")
    studentHead.textContent = `${student.name}`
    studentInfo.textContent = `Alder: ${student.age} Uddannelse: ${student.course}`
    divElement.append(studentHead,studentInfo)
    insertDOM.append(divElement)
})