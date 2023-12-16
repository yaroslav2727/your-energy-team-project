import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createSubscription } from './api/api';
import { loader } from './utils/loader';

const emailInput = document.querySelector('.subscribe-input');
const submitButton = document.querySelector('.submit-btn');
submitButton.addEventListener('click', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = emailInput.value.trim();

  const data = {
    email: email,
  };

  loader.create();

  createSubscription(data)
    .then(response => {
      const respMessage = response.message;  
      iziToast.show({
        position: 'center',
        color: 'green',
        message: `${respMessage}`,
      });
      emailInput.value = '';
    })
    .catch(err => {
      if (err.response.status === 409) {
        iziToast.show({
          position: 'center',
          color: 'red',
          message: `this email ${email} is subscribs`,
        });
         emailInput.value = '';
      }
    })
    .finally(() => {
      loader.destroy();
    });
}