let nameErrorEl = document.getElementById("nameError")
let phoneErrorEl = document.getElementById("phoneError")
let emailErrorEl = document.getElementById("emailError")
let messageErrorEl = document.getElementById("messageError")
let validateEl = document.getElementById("validate")

function handleName(){
    const name = document.getElementById("name").value

    if(name.length < 6){
        nameErrorEl.innerText = "Name is required"
        return false
    }
    if(!name.match(/^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/)){
        nameErrorEl.innerText = "Invalid name format"
        return false
    }
    nameErrorEl.innerText = "✅"
    return true
}
function handlePhone(){
    const phone = document.getElementById('number').value

    if(phone.length < 11){
        phoneErrorEl.innerText = "Phone number is required"
        return false
    }
    if(isNaN(parseInt(phone))){
        phoneErrorEl.innerText = "Invalid phone number"
        return false
    }
    phoneErrorEl.innerText = "✅"
    return true
}
function handleEmail(){
    const email = document.getElementById('email').value

    if(email.length < 8){
        emailErrorEl.innerText = "Email is required"
        return false
    }
    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailErrorEl.innerText = "Invalid email format"
        return false
    }
    emailErrorEl.innerText = "✅"
    return true
}
function handleMessage(){
    const message = document.getElementById('message').value

    if(message.length < 3){
        messageErrorEl.innerText = "Message is required"
        return false
    }
    messageErrorEl.innerText = "✅"
    return true
}
function validateForm(){
    if(!handleName() || !handlePhone() 
        || !handleEmail() || !handleMessage()){
    validateEl.style.display = "block"
    validateEl.textContent = "Please fix errors"
    setTimeout(function(){
        validateEl.style.display = "none"} , 3000)
        return false
    }
}
