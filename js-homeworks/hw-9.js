// Задание 1
let heading1 = document.querySelector('.task1 h1');
let btn1 = document.querySelector('.buttonTask1');

btn1.addEventListener('click', function () {
  if (heading1.style.display === 'none') {
    heading1.style.display = 'block';
    btn1.textContent = 'Скрыть заголовок';
  } else {
    heading1.style.display = 'none';
    btn1.textContent = 'Показать заголовок';
  }
});

// Задание 2
let paragraph2 = document.querySelector('.change-color');
let btn2 = document.querySelector('.buttonTask2');

btn2.addEventListener('click', function () {
  if (paragraph2.style.color === 'blue') {
    paragraph2.style.color = 'black';
    btn2.textContent = 'Перекрасить текст в синий';
  } else {
    paragraph2.style.color = 'blue';
    btn2.textContent = 'Вернуть черный цвет текста';
  }
});

// Задание 3
let heading3 = document.querySelector('.task3 h1');
let ordinaryHeading = heading3.textContent;
let btn3 = document.querySelector('.buttonTask3');

btn3.addEventListener('click', function () {
  if (heading3.textContent === ordinaryHeading) {
    heading3.textContent = 'Привет, мир!';
  } else {
    heading3.textContent = ordinaryHeading;
  }
});

// Задание 4
let btn4 = document.querySelector('.buttonTask4');
let descriptionArr = document.querySelectorAll('.task4 .description');
let originalTexts = Array.from(descriptionArr).map(el => el.textContent);

btn4.addEventListener('click', function () {
  if (btn4.textContent === 'Вернуть прежний текст') {
    for (let i = 0; i < descriptionArr.length; i++) {
      descriptionArr[i].textContent = originalTexts[i];
    }
    btn4.textContent = 'Изменить текст';
  } else {
    descriptionArr.forEach(el => {
      el.textContent = 'Измененный текст';
    });
    btn4.textContent = 'Вернуть прежний текст';
  }
});

// Задание 5
let btn5 = document.querySelector('.buttonTask5');
let descriptionArr5 = document.querySelectorAll('.task5 .description');
let originalTexts5 = Array.from(descriptionArr5).map(el => el.textContent);

btn5.addEventListener('click', function () {
  if (btn5.textContent === 'Вернуть прежний текст') {
    for (let i = 0; i < descriptionArr.length; i++) {
      descriptionArr5[i].textContent = originalTexts5[i];
    }
    btn5.textContent = 'Изменить текст';
  } else {
    descriptionArr5.forEach(el => {
      el.textContent = 'Новый текст';
    });
    btn5.textContent = 'Вернуть прежний текст';
  }
});

// Задание 6
let btn6 = document.querySelector('.buttonTask6');
let order = 0;

btn6.addEventListener('click', function () {
  let newEl = document.createElement('p');
  order++
  newEl.textContent = 'Это ' + order + 'й добавленный Вами элемент';
  document.body.appendChild(newEl);
});

// Задание 7
for (let i = 1; i <= 5; i++) {
  let ordinaryEl = document.createElement('p');
  ordinaryEl.textContent = 'Это обычный текст';
  container.appendChild(ordinaryEl);

  let newEl = document.createElement('p');
  newEl.classList.add('description');
  newEl.textContent = 'Это ' + i + 'й элемент с классом description';
  container.appendChild(newEl);
}

let btn7 = document.querySelector('.buttonTask7');

btn7.addEventListener('click', function () {
  if (document.querySelector('.task7 .description')) {
    let elToDelete = document.querySelector('.task7 .description');
    elToDelete.remove();
  }
});