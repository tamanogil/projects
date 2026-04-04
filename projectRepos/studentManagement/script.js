class Student {
    constructor(id, name, age , grade , hobbies){
        this.id = id
        this.name = name
        this.age = age
        this.grade = grade
        this.hobbies = hobbies
    }
}

const addStudentBtnEl = document.getElementById('addStudent')
const showStudentBtnEl = document.getElementById('showStudent')
const textDisplayEl = document.getElementById('textDisplay')
const recordDisplayEl = document.getElementById('recordDisplay')


addStudentBtnEl.addEventListener('click',  addStudent)
showStudentBtnEl.addEventListener('click' , showStudent)

recordDisplayEl.style.display = 'none'

function addStudent(){
    
    let userId = prompt('Enter ID')
    let userName = prompt('Enter Name')
    let userAge = prompt('Enter Age')
    let userGrade = prompt('Enter Grade')
    let userHobby = prompt('Enter Hobbies')

    const newStudent = new Student(userId, userName, userAge,userGrade,
        userHobby)
    const myDiv = document.createElement("div");
    recordDisplayEl.appendChild(myDiv);
    myDiv.textContent = `ID: ${newStudent.id} Name: ${newStudent.name} Age: ${newStudent.age} Grade: ${newStudent.grade}
    Hobbies: ${newStudent.hobbies}`
}

function showStudent(){
    recordDisplayEl.style.display = 'block'
}

