const emailInput = document.querySelector('subscribe-input')
const submitButton = document.querySelector('submit-btn')

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}


function isEmailUnique(email) {
  const storedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
  return !storedEmails.includes(email);
}

function saveEmailToLocalStorage(email) {
  let storedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
  storedEmails.push(email);
  localStorage.setItem('subscribedEmails', JSON.stringify(storedEmails));
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

   const email = emailInput.value.trim();

  if (validateEmail(email)) {
    if (isEmailUnique(email)) {
      saveEmailToLocalStorage(email);
      alert('Email subscribed successfully!');
      
    } else {
      alert('Email already subscribed!');
    }
  } else {
    alert('Please enter a valid email address!');
  }
});
