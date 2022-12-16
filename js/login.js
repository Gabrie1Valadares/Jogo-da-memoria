const input = document.querySelector('.Login__input');
const button = document.querySelector('.Login__button');
const form = document.querySelector('.Login-form');

const validateInput = ({ target }) => {
  if (target.value.length > 3) {
    button.removeAttribute('disabled');
    return;
  }

  button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem('player', input.value);
  window.location = 'pages/game.html';
}


input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);


