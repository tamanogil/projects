const body = document.getElementsByTagName("body")[0]

function setColor(name){
    body.style.backgroundColor = name
}
function randomColor(){
    const red = Math.floor(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)
    body.style.backgroundColor = `rgb(${red},${blue},${green})`
}