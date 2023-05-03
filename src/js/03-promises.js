import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form')
}

refs.form.addEventListener('submit', onSubmitForm)

const formData = new FormData(refs.form);
const data = {}

for (const [key, value] of formData) {
  data[`${key}`] = value
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`)
      }
    }, delay)
  })
}

function onSubmitForm(e) {
  e.preventDefault();
  const formData = new FormData(refs.form);
  for (const [key, value] of formData) {
    data[key] = +value
  }

  for (let i = 1; i <= data.amount; i++) { 
    createPromise(i, data.delay).then(onSuccess)
      .catch(onError);
    data.delay += data.step
  }

}

Notify.init({
  useIcon: false,
  fontSize: '18px',
})

function onSuccess(res) { 
  Notify.success(`${res}`)

}

function onError(res) { 
  Notify.failure(`${res}`)
}