class Student {
    constructor(id, firstName, lastName , mobileNo , email , yearLevel){
        this.id = id
        this.firstName = firstName
        this.lastName = lastName    
        this.mobileNo = mobileNo
        this.email = email
        this.yearLevel = yearLevel
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
    let lastName = prompt('Enter Last Name')
    let email = prompt('Enter Email')

    if(!lastName || !firstName || !email || typeof Number(lastName) !== 'string' 
        || typeof Number(firstName) !== 'string' || typeof Number(email) !== 'string'){
        alert("You've entered an invalid name or email.")
        return
    }

    let mobileNo = prompt('Enter Mobile No.')
    let yearLevel = prompt('Enter Year Level')
    if(!mobileNo || ! yearLevel || isNaN(parseInt(mobileNo)) ||isNaN(parseInt(yearLevel))){
        alert("You've entered an invalid mobile no or year level.")
        return
    }
    const newStudent = new Student(userId, firstName, lastName, mobileNo, email, yearLevel)
    const confirmSave = confirm(`Do you want to save student ID: ${userId}?`)
    if(!confirmSave){
        alert(`Student ID: ${userId} not saved`)
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
    | Email: ${students.email} | Year Level: ${students.yearLevel}`
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
