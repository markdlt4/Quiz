var startButton = document.getElementById("start");
var secondsLeft = 10
var timeEl = document.getElementById("timer")

function promptQuestion(){
    var timerInterval = setInterval(function() {
        secondsLeft--; 
        console.log(secondsLeft)
        timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          console.log("times up")
        }
    
      }, 1000);
} 
startButton.addEventListener("click", promptQuestion)