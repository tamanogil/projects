let items = []
const itemDiv = document.getElementById('items')
const inputElement = document.getElementById("todo")
const storageKey = ""

function loadItems(){
    const oldItems = localStorage.getItem(storageKey)
    if(oldItems) items = JSON.parse(oldItems)
    renderItems()
}

function renderItems(){
    itemDiv.innerHTML = ""

    for(const [idx, item] of Object.entries(items)){

        const container = document.createElement('div')
        
        const text = document.createElement('p')
        text.textContent = item
        text.onclick = () => removeItems(idx)
    

        itemDiv.appendChild(container)
        itemDiv.appendChild(text)
    }
}

function saveItems(){
    const stringItems = JSON.stringify(items)
    localStorage.setItem(storageKey, stringItems)
}

function addItem() {
    let todo = inputElement.value
    if(!todo) {
        alert("You cannot add an empty item")
        return
    }

   items.push(todo)
   console.log(items)
   renderItems()
   inputElement.value = ""
   saveItems()
}

function removeItems(idx){
   items.splice(idx, 1)
   renderItems()
   saveItems()
}

//document.addEventListener("DOMContentLoaded", loadItems)
