let items = []
const itemDiv = document.getElementById("items")
let inputValue = document.getElementById('input')


function renderItems(){
    itemDiv.innerHTML = ''
    for (const [idx, item] of Object.entries(items)) {
    let container = document.createElement('div')
    const text = document.createElement('p')
    //create p element to show items on div
    text.textContent = item
    text.onclick = () => removeItem(idx)
    console.log(text)
    //set to display p value to the input element

    //create specific divs for each item element
    itemDiv.appendChild(text)
    itemDiv.appendChild(container)
    
    //set items div to an empty string
    }
}
renderItems()
function addItem(){
    const value = inputValue.value
    items.push(value)
    renderItems()
    inputValue.value = ""
}
function removeItem(idx){
    items.splice(idx , 1)
    renderItems()
}