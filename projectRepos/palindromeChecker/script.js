const input = document.getElementById('word')
const display = document.getElementById("displayText")

function reverse(str){
    return str.split('').reverse().join('')
}

function check(){
    const value = input.value
    const reversedWord = reverse(value)
    if (value === reversedWord) {
        display.textContent = `Your word ${value} is a Palindrome`
    }
    else{
        display.textContent = `Your word ${value} is not a Palindrome`
    }
   
}