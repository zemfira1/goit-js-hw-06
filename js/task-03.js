
//Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

//Используй массив объектов images для создания элементов <img> вложенных в <li>.
// Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

//Все элементы галереи должны добавляться в DOM за одну операцию вставки.
//Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');

//1й вариант//
// const imagesEl = images.map(image => {
//   const imageLi = document.createElement('li');
//   const imageLiContent = document.createElement('img');
//   imageLiContent.src = image.url;
//   imageLiContent.alt = image.alt;
//   console.log(imageLiContent);

//   imageLi.append(imageLiContent);

//   return imageLi;
// });

// gallery.append(...imagesEl);


    //2й вариант//
    // const createGallery = images => {
    //   return images.map(image => {
    //     const imageLi = document.createElement('li');
    //     const imageLiContent = document.createElement('img');
    //     imageLiContent.src = image.url;
    //     imageLiContent.alt = image.alt;
    //     console.log(imageLiContent);

    //     imageLi.append(imageLiContent);

    //     return imageLi;
    //   });
    // };

    // const imagesEl = createGallery(images);
    // console.log(imagesEl);

    // gallery.append(...imagesEl);


//3й вариант//
const makeGallery = ({ url, alt }) => {
  return `
    <li>
      <img src=${url} alt=${alt}/>
    </li>
  `;
};

const makeGalleryArray = images.map(makeGallery).join('');
console.log(makeGalleryArray);

gallery.insertAdjacentHTML('afterbegin', makeGalleryArray);

