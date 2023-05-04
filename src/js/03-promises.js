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
        resolve({position, delay })
      } else {
        reject({position, delay})
      }
    }, delay)
  })
}

function onSubmitForm(e) {
  e.preventDefault();
  const formData = new FormData(refs.form);
  refs.form.reset()
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

function onSuccess({ position, delay}) { 
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)

}

function onError({ position, delay }) { 
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
}