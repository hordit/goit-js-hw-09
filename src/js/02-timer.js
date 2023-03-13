import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
require("flatpickr/dist/themes/material_blue.css");

const refs = {
startBtn: document.querySelector('button[data-start]'),
daysValue: document.querySelector('[data-days]'),
hoursValue: document.querySelector('[data-hours]'),
minutesValue: document.querySelector('[data-minutes]'),
secondsValue: document.querySelector('[data-seconds]'),
dateTimePicker: document.querySelector('#datetime-picker'),
};
const { startBtn, daysValue, hoursValue, minutesValue, secondsValue,dateTimePicker } = refs;
const INTERVAL_DELAY = 1000;
startBtn.disabled = true;
 
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const selectedDate = selectedDates[0].getTime();
      const nowDate = Date.now();
      if(selectedDate < nowDate) {
       Notify.failure('Please choose a date in the future');
        return;
      }
      startBtn.disabled = false;
    },
};

flatpickr(dateTimePicker, options);
const datePicker = flatpickr(dateTimePicker, options);

const timer = {
intervalId: null,
isActive: false,

start() {
    if(this.isActive) {
        return;
    }
   const startTime = datePicker.selectedDates[0];
   this.isActive = true;

   this.intervalId = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = startTime - currentTime;
    if(deltaTime < 0) {
        clearInterval(this.intervalId);
        this.isActive = false;
        return;
    }
    const timeUpated = convertMs(deltaTime);
    updateTimer(timeUpated);
   }, INTERVAL_DELAY);
 },
};

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};

function updateTimer({ days, hours, minutes, seconds }) {
    daysValue.textContent = addLeadingZero(days);
    hoursValue.textContent = addLeadingZero(hours);
    minutesValue.textContent = addLeadingZero(minutes);
    secondsValue.textContent = addLeadingZero(seconds);
};

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
};

startBtn.addEventListener('click', timer.start);

  
  


