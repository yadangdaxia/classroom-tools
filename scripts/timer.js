
// Get start/stop and reset buttons
const startButton = document.getElementById('start-button')
const resetButton = document.getElementById('reset-button')
const displayArea = document.getElementById('display-timer')
console.log(displayArea)

// Get user time (need .value?)
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

// Store ref to variable
let startTimer = false;


function timer() {
  if(hours.value == 0 && minutes.value == 0 && seconds.value == 0) {
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;




  } else if(seconds.value != 0) {
    seconds.value--;
  } else if(minutes.value !=0 && seconds.value == 0){
    seconds.value = 59;
    minutes.value--;
  } else if(hours.value !=0 && minutes.value == 0){
    minutes.value = 60;
    hours.value--;
  }
  displayArea.textContent = `${hours.value} hours ${minutes.value} minutes, ${seconds.value} seconds`

}


resetButton.addEventListener('click', () => {
  hours.value = 0;
  minutes.value = 0;
  seconds.value = 0;
  clearInterval(startTimer);
  startButton.innerText = "Start"
})

function startInterval() {

  startTimer = setInterval(function () {
    timer();
  }, 1000);
  // console.log(seconds.value)

    let sound = new Audio('images/bell.mp3')
    setTimeout(function () {
      sound.play();
    }, 5000)
    sound.pause();
    sound.currentTime = 0;
}

startButton.addEventListener('click', () => {
  //if paused, start timer
  if (startTimer == false) {
    startInterval();
    startButton.innerText = "Pause"
    console.log("Running")
  }
  else {
    clearInterval(startTimer);
    startTimer = false
    startButton.innerText = "Resume"
    console.log("Paused")
  }
    // displayArea.textContent = `${seconds.value}`
})
