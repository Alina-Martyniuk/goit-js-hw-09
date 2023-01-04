const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const body = document.querySelector("body");

let intervalId;


startBtn.addEventListener("click", startChangeColor);
stopBtn.addEventListener("click", stopChangeColor);

function startChangeColor() {
  setDisabled(startBtn);
  removeDisabled(stopBtn);
  intervalId = setInterval(() => body.style.backgroundColor = getRandomHexColor(), 1000);
  return intervalId

}

function stopChangeColor() {
  setDisabled(stopBtn);
  removeDisabled(startBtn);
  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function setDisabled(btn) {
  btn.setAttribute("disabled", "disabled");
}

function removeDisabled(btn) {
  btn.removeAttribute("disabled");
}
