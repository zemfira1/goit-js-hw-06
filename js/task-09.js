//Напиши скрипт, который изменяет цвета фона элемента <body>
// через инлайн стиль при клике на button.change - color и
// выводит значение цвета в span.color.

//Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');
let color = getRandomHexColor();

btn.addEventListener('click', () => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
});


