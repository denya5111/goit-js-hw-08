import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');
const submitButton = document.querySelector('.feedback-form button');

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

form.addEventListener('input', throttle(handlerInputData, 500));

function handlerInputData(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

if (localStorage.getItem(STORAGE_KEY)) {
  formData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  input.value = formData.email || '';

  textarea.value = formData.message || '';
}

submitButton.addEventListener('click', handlerClickSubmitButton);

function handlerClickSubmitButton(e) {
  e.preventDefault();

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);

  formData = {};

  form.reset();
}
