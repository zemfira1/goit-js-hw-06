//В HTML есть пустой список ul#ingredients.
//В JavaScript есть массив строк.

//Напиши скрипт, который для каждого элемента массива ingredients:

//Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
//Добавит название ингредиента как его текстовое содержимое.
//Добавит элементу класс item.
//После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

//1й вариант//
// const ingredientsArray = [];

// for (const ingredient of ingredients) {
//   const eachLi = document.createElement('li');
//   eachLi.textContent= ingredient;
//   eachLi.classList.add('item');
//   console.log(eachLi);
//   ingredientsArray.push(eachLi);
// };

// console.log(ingredientsArray);
// listEl.append(...ingredientsArray);

    //2й вариант//
    // const elementsOfList = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join(' ');
    // console.log(elementsOfList);
    // listEl.innerHTML = elementsOfList;

//3й вариант//
const elementsOfList = ingredients.map(ingredient => {
  const eachLi = document.createElement('li');
  eachLi.textContent= ingredient;
  eachLi.classList.add('item');
  console.log(eachLi);
  
  return eachLi;
});

console.log(elementsOfList);
listEl.append(...elementsOfList);

