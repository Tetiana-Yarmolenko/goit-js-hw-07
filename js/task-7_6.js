// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

const inputEl = document.querySelector(`#validation-input`);
const validNumber = Number(inputEl.dataset.length);
// const validNumber = Number(inputEl.getAttribute("data-length"));

const onInputSymbols = () =>
  inputEl.value.length === validNumber
    ? (inputEl.classList.add("valid"), inputEl.classList.remove("invalid"))
    : (inputEl.classList.add("invalid"), inputEl.classList.remove("valid"));

inputEl.addEventListener(`blur`, onInputSymbols);
