const inputValue = document.getElementById('text')

let randomStr = Math.random().toString(36).substring(2,12)


function generatePassword(){
    inputValue.value = randomStr
    if(randomStr != "")
     randomStr = Math.random().toString(36).substring(2,12)
}
function copy(){
    navigator.clipboard.writeText(inputValue.value)
}
