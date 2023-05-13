//Счетчик состоит из спана и кнопок, которые, при клике,
//должны увеличивать и уменьшать его значение на единицу.

//Создай переменную counterValue в которой будет храниться текущее
//значение счетчика и инициализируй её значением 0.
//Добавь слушатели кликов на кнопки, внутри которых увеличивай или
//уменьшай значение счтетчика.
//Обновляй интерфейс новым значением переменной counterValue.

const value = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
let counterValue = 0;

// console.log(value);
// console.log(btnDecrement);
// console.log(btnIncrement);

btnDecrement.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
    console.log(value.textContent);

});

btnIncrement.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
    console.log(value.textContent);
});
