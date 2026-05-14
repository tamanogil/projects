let qrTextEl =  document.getElementById("qrText")
let qrImageEl = document.getElementById("qrImage")
let qrImageBoxEl = document.getElementById("qrImageBox")


function generateQr(){
    qrImageEl.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrTextEl.value}`
}