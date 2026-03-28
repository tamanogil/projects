const dateObject = document.getElementById('date').valueAsDate;
const currentDate = new Date();
const resultElement = document.getElementById('result')
let splitDate = []
let dateArray = []

// Note: getMonth() returns a zero-based value (0 for January, 11 for December).
const currentDateArray = [
    currentDate.getFullYear(),
    currentDate.getMonth() +1, 
    currentDate.getDate()
];
    resultElement.textContent = ""
    
    function calculate() {
        const dateObject = document.getElementById('date').value
        dateArray = dateObject.split('-')
        
    if(currentDateArray[1] < dateArray[1]){
     resultElement.textContent = `You are ${currentDateArray[0]-dateArray[0] -1

    } years, ${currentDateArray[1]} months and ${currentDateArray[2]} days old`
    }
    else if(currentDateArray[1] >= dateArray[1]){
        resultElement.textContent = `You are ${currentDateArray[0]-dateArray[0]

        } years, ${currentDateArray[1]-dateArray[1]} months and ${currentDateArray[2]-dateArray[2]} days old`
    }

}


