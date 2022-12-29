const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const body = document.querySelector("body");

let intervalId;


startBtn.addEventListener("click", startChangeColor);
stopBtn.addEventListener("click", stopChangeColor);

function startChangeColor() {
    startBtn.setAttribute("disabled", "disabled");
    stopBtn.removeAttribute("disabled");
    intervalId = setInterval(() => body.style.backgroundColor = getRandomHexColor(), 1000);
    return intervalId

}

function stopChangeColor() {
    stopBtn.setAttribute("disabled", "disabled");
    startBtn.removeAttribute("disabled");
    clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


