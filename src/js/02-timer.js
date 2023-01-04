import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

Notiflix.Notify.init({
    width: '500px',
    position: 'center-top',
    fontSize: '20px',
})

const input = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");
const dataDays = document.querySelector("[data-days]");
const dataHours = document.querySelector("[data-hours]");
const dataMinutes = document.querySelector("[data-minutes]");
const dataSeconds = document.querySelector("[data-seconds]");

let selectedDay;
let timerId;

startBtn.setAttribute("disabled", "disabled");
startBtn.addEventListener("click", startCount)

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose([selectedDates]) {
        if (selectedDates > Date.now()) {
            startBtn.removeAttribute("disabled");
            selectedDay = selectedDates;
        } else {
            Notiflix.Notify.warning("Please choose a date in the future");
        };
  },
};

flatpickr(input, options);

function startCount() {
    timerId = setInterval(function () {
        let secondsDiff = (selectedDay - Date.now());
        let dataObject = convertMs(secondsDiff);
        dataTextContentUpdate(dataObject);
        if (secondsDiff < 1000) {
            clearInterval(timerId);
        return;
        }
    }, 1000);
}

function dataTextContentUpdate(object) {
    dataDays.textContent = addLeadingZero(object.days);
    dataHours.textContent = addLeadingZero(object.hours);
    dataMinutes.textContent = addLeadingZero(object.minutes);
    dataSeconds.textContent = addLeadingZero(object.seconds);
}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
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
}

