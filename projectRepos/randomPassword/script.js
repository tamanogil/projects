const inputValue = document.getElementById('text')

let randomStr = Math.random().toString(36).substring(2,12)


function generatePassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789! @#$%^&*()_-+={[}]|;"<,>.?/:';
  let result = '';
  for (let i = 0; i < 10; i++) {
    // Select a random character from the defined set
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  inputValue.value = result
}
function copy(){
    navigator.clipboard.writeText(inputValue.value)
}
