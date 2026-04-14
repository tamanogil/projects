let nameErrorEl = document.getElementById("nameError")
let phoneErrorEl = document.getElementById("phoneError")
let emailErrorEl = document.getElementById("emailError")
let messageErrorEl = document.getElementById("messageError")

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

