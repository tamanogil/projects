let secondsElapsed = 0
let interval = null
const time = document.getElementById('time')

function setTime(){
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60
    time.innerHTML = `${minutes}:${seconds}`
}

function timer(){
    secondsElapsed++
    setTime()
}

function startClock(){
    interval = setInterval(timer, 1000)
}

function stopClock(){
    clearInterval(interval)
    interval = setTimeout(timer, 1000);
}

function reset(){
    stopClock()
    secondsElapsed = 0
    time.innerHTML = secondsElapsed
    stopClock()
}
