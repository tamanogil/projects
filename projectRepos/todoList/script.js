let items = []
const itemDiv = document.getElementById("items")
const input = document.getElementById('todo')

function loadItems(){}

function renderItems(){
     itemDiv.innerHTML = null

    for (const [idx, item] of Object.entries(items)) {
        const text = document.createElement('p')
        text.textContent = item
    
    const container = document.createElement('div')

    itemDiv.appendChild(text)
    itemDiv.appendChild(container)
}
}


function saveItems(){}

function addItem() {
    const todo = input.value
    items.push(todo)
   renderItems()
}

function removeItems(){}