import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formaData = document.querySelector('.form');

formaData.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
     setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      }
        reject({position, delay});
    }, delay);
  });
};

function onSubmit(e) {
  e.preventDefault();
  const formData = new FormData(formaData);
  const data = {};
  formData.forEach((value, name) => {
      data[name] = Number(value);
  });

  for (let position = 1; position <= data.amount; position += 1) {
  createPromise(position, data.delay).then(onSuccess).catch(onError);
  data.delay = data.delay + data.step;
  };

  formaData.reset();
}

function onSuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
};

function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
};


