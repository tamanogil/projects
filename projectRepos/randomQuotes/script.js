const qoutes = [
    "The best way to predict the future is to create it.",
    "Sometimes, when things are falling apart, they may actually be falling into place.",
    "You can't start the next chapter of your life if you keep re-reading your last one.",
    "To be interesting-be interested.",
    "In three words I can sum up everything I've learned about life: it goes on."
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("qoute")
const tweetElement = document.getElementById("tweet")

function generateQoute(){
    if(usedIndexes.size >= (qoutes.length)){
            usedIndexes.clear()
    }
    while(true){

    const randomIndex = Math.floor(Math.random() * qoutes.length)

        if(usedIndexes.has(randomIndex)) continue

    const quote = qoutes[randomIndex]
    quoteElement.innerHTML = quote
    usedIndexes.add(randomIndex)
    console.log(randomIndex)

    tweetElement.onclick = () =>{
    window.open("https://x.com/intent/tweet?text=" + encodeURIComponent(quote), "_blank")
    }

    break
}

}
