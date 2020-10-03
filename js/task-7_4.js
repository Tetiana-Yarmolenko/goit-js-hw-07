// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const incrementEl = document.querySelector('[data-action="increment"]');
const decrementEl = document.querySelector('[data-action="decrement"]');

const counterValue = document.querySelector("#value");

decrementEl.addEventListener("click", () => --counterValue.textContent);
incrementEl.addEventListener("click", () => ++counterValue.textContent);

// let value = 0;
// counterValue.textContent = value;

// const increment = () => (counterValue.textContent = value += 1);
// const decrement = () => (counterValue.textContent = value -= 1);
