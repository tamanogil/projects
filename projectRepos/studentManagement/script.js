class Student {
    constructor(id, firstName, lastName , mobileNo , email , hobbies){
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.mobileNo = mobileNo
        this.email = email
        this.hobbies = hobbies
    }
}
let studentsArr = JSON.parse(localStorage.getItem('students')) || []
const addStudentBtnEl = document.getElementById('addStudent')
const showStudentBtnEl = document.getElementById('showStudent')
const textDisplayEl = document.getElementById('textDisplay')
const recordDisplayEl = document.getElementById('recordDisplay')
const searchInputEl = document.getElementById('searchInput')


window.onload = () => {
    studentsArr.forEach((e => renderItems(e)))
}

searchInputEl.addEventListener('input', () => {
    const query = searchInputEl.value.toLowerCase()

    recordDisplayEl.innerHTML = ''; 
    recordDisplayEl.style.display = 'block';
    if(query === ""){
        studentsArr.forEach(s => renderItems(s))
        return
    }

    const filteredStudents = studentsArr.filter(s => s.firstName.toLowerCase().includes(query) 
                            || s.lastName.toLowerCase().includes(query) || s.id.toString().includes(query))
        filteredStudents.forEach(s => renderItems(s))
    }
)
addStudentBtnEl.addEventListener('click',  addStudent)
showStudentBtnEl.addEventListener('click' , showStudent)

recordDisplayEl.style.display = 'none'

function addStudent(){
    
    const lastId = studentsArr.length > 0 ? Math.max(...studentsArr.map(s => Number(s.id))) 
                                        : 0
    let userId = lastId + 1

    let firstName = prompt('Enter First Name')
    if(firstName == null || firstName.trim() == "" ){
        alert("You've entered an invalid first name.")
        return
    }
    let lastName = prompt('Enter Last Name')
    if(lastName == null || lastName.trim() == ""){
        alert("You've entered an invalid last name.")
    }
    let mobileNo = prompt('Enter Mobile No.')
    if(mobileNo == null || mobileNo.trim() == "" || isNaN(parseInt(mobileNo))){
        alert("You've entered an invalid mobile no.")
        return
    }
    let email = prompt('Enter Email')
    if(email == null || email.trim() == ""){
        alert("You've entered an invalid email.")
        return
    }
    let userHobby = prompt('Enter Hobbies')
    if(userHobby == null || userHobby.trim() == ""){
        alert("You've entered an invalid hobbies")
        return
    }
    const newStudent = new Student(userId, firstName, lastName, mobileNo, email,
        userHobby)
    const userExists = studentsArr.some(s => s.id === userId)
    if(userExists){
        alert("You've entered a user Id that already existed")
        return
    }
    studentsArr.push(newStudent)
    localStorage.setItem("students", JSON.stringify(studentsArr))
    renderItems(newStudent)
}

function renderItems(students){
const myDiv = document.createElement("div");
const deleteBtn = document.createElement("button");
    myDiv.textContent = `ID: ${students.id} | First Name: ${students.firstName} | Last Name: ${students.lastName} | Mobile No: ${students.mobileNo} 
    | Email: ${students.email} | Hobbies: ${students.hobbies}`
    deleteBtn.textContent = "delete"

    deleteBtn.onclick = () => {
      studentsArr = studentsArr.filter(s => s.id !== students.id)
       localStorage.setItem("students", JSON.stringify(studentsArr))
        myDiv.remove()
        deleteBtn.remove()
    }
    recordDisplayEl.appendChild(myDiv);
    recordDisplayEl.appendChild(deleteBtn)
}


function showStudent(){
    recordDisplayEl.style.display = recordDisplayEl.style.display === 'none' ? 'block' : 'none'  
    recordDisplayEl.innerHTML = ''; 
    studentsArr.forEach(s => renderItems(s))
}
