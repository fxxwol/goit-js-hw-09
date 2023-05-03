const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]')
}

const DELAY = 1000
let intervalId = null

refs.startBtn.addEventListener('click', onStartBtnClick)
refs.stopBtn.addEventListener('click', onStopBtnClick)
refs.stopBtn.setAttribute('disabled', '')

function onStartBtnClick() { 
    refs.startBtn.setAttribute('disabled', '')
    refs.stopBtn.removeAttribute('disabled')
    intervalId = setInterval(function changeColor() {
        document.body.style.background = getRandomHexColor();
        return changeColor;
    }(), DELAY);
}

function onStopBtnClick() { 
    refs.startBtn.removeAttribute('disabled')
    refs.stopBtn.setAttribute('disabled', '')
    clearInterval(intervalId)
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}