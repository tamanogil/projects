const resultElement = document.getElementById('result')
const selectedOption = document.querySelector('input[name="color"]:checked')
let score = 0

function checkValue(){
    const selectedOption = document.querySelector('input[name="color"]:checked')
    let selected =  selectedOption.value
    if(selected == "milk"){
        score++
     resultElement.textContent = "Correct"}
     else{
        resultElement.textContent = "Wrong"
     }
     console.log(selected)
}

