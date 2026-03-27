let items = []
const divElement = document.getElementById('emptyDiv')
let storageKey = ""

function createNote(){
    divElement.innerHTML = ""
    items.forEach((item, idx) => {
    const editableDiv = document.createElement("div");
    const deleteBtn = document.createElement('button')

// 2. Make it editable
editableDiv.contentEditable = "true";

// 3. Style it (optional, to make it look like an input)
editableDiv.style.width = "300px";
editableDiv.style.height = "100px";
editableDiv.style.border = "1px solid black";
editableDiv.style.padding = "10px";
editableDiv.innerText = `Add notes here....`
console.log(items)
editableDiv.addEventListener('click', () =>{
    editableDiv.innerText = ""
    }
)
deleteBtn.textContent = "Delete"
deleteBtn.onclick = () => removeItem(idx)
// 4. Append to the document

divElement.appendChild(editableDiv);
divElement.appendChild(deleteBtn)
console.log(items)

})
}

function addItem(content){
    items.push(content)
    createNote()
}
function removeItem(idx){
    items.splice(idx,1)
    createNote()
}

