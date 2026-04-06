class Student {
    constructor(id, name, age , grade , hobbies){
        this.id = id
        this.name = name
        this.age = age
        this.grade = grade
        this.hobbies = hobbies
    }
}
let studentsArr = JSON.parse(localStorage.getItem('students')) || []
const addStudentBtnEl = document.getElementById('addStudent')
const showStudentBtnEl = document.getElementById('showStudent')
const textDisplayEl = document.getElementById('textDisplay')
const recordDisplayEl = document.getElementById('recordDisplay')
window.onload = () => {
    studentsArr.forEach((e => renderItems(e)))
}


addStudentBtnEl.addEventListener('click',  addStudent)
showStudentBtnEl.addEventListener('click' , showStudent)

recordDisplayEl.style.display = 'none'

function addStudent(){
    
    let userId = prompt('Enter ID')
     if(userId == null || userId.trim() == "" || isNaN(parseInt(userId))){
        alert("You've entered an invalid ID.")
        return
    }
    let userName = prompt('Enter Name')
    if(userName == null || userName.trim() == "" ){
        alert("You've entered an invalid name.")
        return
    }
    let userAge = prompt('Enter Age')
    if(userAge == null || userAge.trim() == "" || isNaN(parseInt(userAge))){
        alert("You've entered an invalid age.")
        return
    }
    let userGrade = prompt('Enter Grade')
    if(userGrade == null || userGrade.trim() == "" || isNaN(parseInt(userGrade))){
        alert("You've entered an invalid grade.")
        return
    }
    let userHobby = prompt('Enter Hobbies')
    if(userHobby == null || userHobby.trim() == ""){
        alert("You've entered an invalid hobbies")
        return
    }
    const newStudent = new Student(userId, userName, userAge,userGrade,
        userHobby)
        
    studentsArr.push(newStudent)
    localStorage.setItem("students", JSON.stringify(studentsArr))
    renderItems(newStudent)
}

function renderItems(students){
const myDiv = document.createElement("div");
    recordDisplayEl.appendChild(myDiv);
    myDiv.textContent = `ID: ${students.id} | Name: ${students.name} | Age: ${students.age} | Grade: ${students.grade} |
    Hobbies: ${students.hobbies}`
}

function showStudent(){
    recordDisplayEl.style.display = recordDisplayEl.style.display === 'none' ? 'block' : 'none'  
}
