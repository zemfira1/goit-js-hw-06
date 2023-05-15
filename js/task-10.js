//Напиши скрипт создания и очистки коллекции элементов. 
//Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить, 
//коллекция элементов очищается.

//Создай функцию createBoxes(amount), которая принимает один параметр - число. 
//Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

//Размеры самого первого <div> - 30px на 30px.
//Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
//Все элементы должены иметь случайный цвет фона в формате HEX. 
//Используй готовую функцию getRandomHexColor для получения цвета.


//-------------------Здравствуйте! Подскажите, пожалуйста, что я делаю не так, 
//-------------------почему не работает ? Хочу победить это задание))))


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const number = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const box = document.querySelector('#boxes');
// console.log(number);
// console.log(createBtn);
// console.log(destroyBtn);
//console.log(box);

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

let amount = 0;
let divArray = [];

function createBoxes(amount) {
  amount = Number(number.value);
  let sizeCount = 30;
   
  for (let i = 1; i <= amount; i += 1){
    let div = document.createElement('div');
    div.backgroundColor = getRandomHexColor();
    div.style.width = sizeCount;
    div.style.height = sizeCount;

    divArray.push(div);
    sizeCount += 10;
  }
  
  box.append(...divArray);
  console.log(box);
  return box;
};
 console.log(box);


function destroyBoxes(event) {
  box.innerHTML = '';
};




