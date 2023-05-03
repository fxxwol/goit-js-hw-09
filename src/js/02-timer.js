import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
require("flatpickr/dist/themes/dark.css");

const refs = {
    input: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    daysField: document.querySelector('[data-days]'),
    hoursField: document.querySelector('[data-hours]'),
    minutesField: document.querySelector('[data-minutes]'),
    secondsField: document.querySelector('[data-seconds]')

}
const DELAY = 1000
let intervalId = null
refs.startBtn.setAttribute('disabled', '')
refs.startBtn.addEventListener("click", onStartClick)

const fp = flatpickr(refs.input, {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < Date.now()) {
            Notify.failure("Please choose a date in the future")
        } else {
            refs.startBtn.removeAttribute('disabled')
        }
    },
});

function onStartClick(e) {
    intervalId = setInterval(() => {
        const currTime = Date.now();
        const deltaTime = fp.selectedDates[0] - currTime
        const { days, hours, minutes, seconds } = convertMs(deltaTime)
        e.target.setAttribute('disabled', '')
        updateTimerField(refs.daysField, days)
        updateTimerField(refs.hoursField, hours)
        updateTimerField(refs.minutesField, minutes)
        updateTimerField(refs.secondsField, seconds)

        if (days === '00' && hours ==='00' && minutes === '00' && seconds === '00') { 
            clearInterval(intervalId)
        }

    }, DELAY)
}

function updateTimerField(field, value) {
    field.textContent = value
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0')
}