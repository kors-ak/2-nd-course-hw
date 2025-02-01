// Задание 1
// С помощью метода массива sort отсортируйте массив people по возрастанию возраста и выведите результат в консоль.
console.log('Задание 1');

const people = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));


// Задание 2
// Реализуйте функцию filter, которая должна работать аналогично методу массива filter. Возьмите за основу функцию map, которую мы реализовывали на уроке. Чтобы из функции map сделать filter, нужно, в зависимости от результата вызова ruleFunction, принимать решение о том, добавлять в результирующий массив очередной элемент или нет.
console.log('Задание 2');

function isPositive(a) {
  return a > 0;
}

function isMale(person) {
  return person.gender === 'male';
}

function filter(arr, ruleFunction) {
  const output = [];

  arr.forEach(el => {
    if (ruleFunction(el)) {
      output.push(el);
    }
  });

  return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
  {name: 'Глеб', gender: 'male'},
  {name: 'Анна', gender: 'female'},
  {name: 'Олег', gender: 'male'},
  {name: 'Оксана', gender: 'female'}
];

console.log(filter(people2, isMale));


// Задание 3
// Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль текущую дату. Последней строкой должно выводиться сообщение «30 секунд прошло».
console.log('Задание 3');

const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота',];

function prettifyDateRu(date) {
  return `Дата: ${date.getDate()}, ${months[date.getMonth()]}, ${date.getFullYear()}г. — это ${daysOfWeek[date.getDay()]} \nВремя: ${date.toLocaleTimeString()}`;
}

const intervalId = setInterval(() => {
  console.log(prettifyDateRu(new Date()));
}, 3000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log('30 секунд прошло');
}, 30000);


// Задание 4
// Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска. Допишите функцию delayForSecond так, чтобы приветствие выводилось в консоль не сразу, a спустя 1 секунду. Используйте setTimeout.
console.log('Задание 4');

function delayForSecond(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}

delayForSecond(function() {
  console.log('Привет, Глеб!');
})


// Задание 5
// Посмотрите код. В нём допущена ошибка, и он выводит сообщения не в том порядке:

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond2(cb) {
  setTimeout(() => {
    console.log('Прошла одна секунда');
    if(cb) {  cb(); }
  }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
  console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

delayForSecond2(() => sayHi('Глеб'));