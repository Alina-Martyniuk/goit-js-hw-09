import Notiflix from 'notiflix';

Notiflix.Notify.init({
    width: '500px',
    position: 'right-top',
    fontSize: '20px',
})


const form = document.querySelector(".form");
const firstDelayInput = document.querySelector('input[name = "delay"]');
const delayStepInput = document.querySelector('input[name = "step"]');
const amountInput = document.querySelector('input[name = "amount"]');

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  for (let position = 1; position <= amountInput.value; position++) {
    const delay = Number(firstDelayInput.value) + Number(delayStepInput.value) * (position - 1);
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }

}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay)
  })
}
