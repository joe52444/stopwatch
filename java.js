let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let timerInterval;
let isRunning = false;

const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');

function updateDisplay() {
  millisecondsDisplay.textContent = milliseconds < 10 ? '0' + milliseconds : milliseconds;
  secondsDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;
  minutesDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;
}

function startStopwatch() {
  timerInterval = setInterval(() => {
    milliseconds += 1;
    if (milliseconds === 100) {
      milliseconds = 0;
      seconds += 1;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes += 1;
    }
    updateDisplay();
  }, 10);
}

function startStop() {
  if (isRunning) {
    clearInterval(timerInterval);
    startStopBtn.textContent = 'Start';
  } else {
    startStopwatch();
    startStopBtn.textContent = 'Stop';
  }
  isRunning = !isRunning;
}

function resetStopwatch() {
  clearInterval(timerInterval);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  isRunning = false;
  startStopBtn.textContent = 'Start';
  updateDisplay();
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', resetStopwatch);