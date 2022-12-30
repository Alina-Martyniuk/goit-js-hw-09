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
    onClose(selectedDates) {
        if (selectedDates[0] > options.defaultDate) {
            startBtn.removeAttribute("disabled");
            selectedDay = selectedDates[0];
        } else {
            Notiflix.Notify.warning("Please choose a date in the future");
        };
  },
};

flatpickr(input, options);

function startCount() {
    timerId = setInterval(function () {
        let dataObject = convertMs(selectedDay - new Date());
        dataDays.textContent = dataObject.days.toString().padStart(2, '0');
        dataHours.textContent = dataObject.hours.toString().padStart(2, '0');
        dataMinutes.textContent = dataObject.minutes.toString().padStart(2, '0');
        dataSeconds.textContent = dataObject.seconds.toString().padStart(2, '0');
        if (dataObject.days <= 0 && dataObject.hours <= 0 && dataObject.minutes <= 0 && dataObject.seconds <= 0) {
        clearInterval(timerId);
        return;
    }
    }, 1000);
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

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

