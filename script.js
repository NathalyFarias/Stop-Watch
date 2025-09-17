const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const timeDisplay = document.getElementById('time');
const progressCircle = document.querySelector('.progress');

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval = null;
let totalSeconds = 0; // para animação da borda

function updateTime() {
    seconds++;
    totalSeconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }

    const sec = seconds < 10 ? '0' + seconds : seconds;
    const min = minutes < 10 ? '0' + minutes : minutes;
    const hr = hours < 10 ? '0' + hours : hours;

    timeDisplay.textContent = `${hr}:${min}:${sec}`;

    // atualizar borda circular
    const circleLength = 2 * Math.PI * 90; // 2 * PI * r
    const offset = circleLength - (totalSeconds % 60) / 60 * circleLength;
    progressCircle.style.strokeDashoffset = offset;
}

startBtn.addEventListener('click', () => {
    if (!interval) {
        interval = setInterval(updateTime, 1000);
    }
});

pauseBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
});

resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    totalSeconds = 0;
    timeDisplay.textContent = '00:00:00';
    progressCircle.style.strokeDashoffset = 565.48; // reset da borda
}); 


