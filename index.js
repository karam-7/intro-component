const addButton = document.querySelector('.btn');
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const email = document.querySelector('#mail');
const password = document.querySelector('#pass');
const icons = document.querySelectorAll('.icon');
const inputParas = document.querySelectorAll('.input-para');
const inputs = [firstName, lastName, password];


addButton.addEventListener('click', () => {
  const emailValue = email.value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(emailValue)) {
    email.style.borderColor = 'hsl(0, 100%, 74%)';
    icons[2].style.display = 'block';
    inputParas[2].style.display = 'block';
  } else {
    email.style.borderColor = 'hsl(248, 32%, 49%)';
    icons[2].style.display = 'none';
    inputParas[2].style.display = 'none';
  }
});

// Function to display error icons and messages
function displayError(input, icon, inputPara) {
  icon.style.display = 'block';
  inputPara.style.display = 'block';
  input.style.borderColor = 'hsl(0, 100%, 74%)';
}

// Function to hide error icons and messages
function hideError(input, icon, inputPara) {
  icon.style.display = 'none';
  inputPara.style.display = 'none';
  input.style.borderColor = 'hsl(248, 32%, 49%)';
}

// Event listener for form submission
const form = document.querySelector('.info-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  let emptyFields = 0;

  // Check for empty fields
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      displayError(input, input.nextElementSibling, input.nextElementSibling.nextElementSibling);
      emptyFields++;
    }
  });

  // If email is invalid, display error icon and message
  const emailValue = email.value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(emailValue)) {
    email.style.borderColor = 'hsl(0, 100%, 74%)';
    icons.style.display = 'block';
    inputParas.style.display = 'block';
  }

  // If there are empty fields, prevent form submission
  if (emptyFields > 0 || !regex.test(emailValue)) {
    return;
  }

  // If all fields are filled, hide error icons and messages
  inputs.forEach(input => {
    hideError(input, input.nextElementSibling, input.nextElementSibling.nextElementSibling);
  });

  // Submit form
  form.submit();
});

// Event listener for input fields
inputs.forEach(input => {
  input.addEventListener('input', function() {
    if (input.value.trim() !== '') {
      hideError(input, input.nextElementSibling, input.nextElementSibling.nextElementSibling);
    }
  });
});

// Event listener for email input field
email.addEventListener('input', function() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(email.value)) {
    email.style.borderColor = 'hsl(248, 32%, 49%)';
    icons[2].style.display = 'none';
    inputParas[2].style.display = 'none';
  } else {
    email.style.borderColor = '';
    icons[2].style.display = 'none';
    inputParas[2].style.display = 'none';
  }
})

addButton.addEventListener('click', () => {
  let emptyFields = 0;
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      displayError(input, input.nextElementSibling, input.nextElementSibling.nextElementSibling);
      emptyFields++;
    }
  });

  const emailValue = email.value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(emailValue)) {
    email.style.borderColor = 'hsl(0, 100%, 74%)';
    icons[2].style.display = 'block';
    inputParas[2].style.display = 'block';
    emptyFields++;
  } else {
    email.style.borderColor = 'hsl(248, 32%, 49%)';
    icons[2].style.display = 'none';
    inputParas[2].style.display = 'none';
  }

  if (emptyFields > 0) {
    return;
  }
});

 
