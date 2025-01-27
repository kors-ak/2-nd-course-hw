// Задание 1
// Преобразовать строку 'js' в верхний регистр

let task1 = 'js';
task1 = task1.toUpperCase();
console.log(`Задание 1: \n${task1}`);


// Задание 2
// Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив, содержащий только те элементы первого массива, которые начинаются со второй строки. Регистр символов не влияет на результат.

const search = (arr, str) => arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));

let flowers = ['пион', 'пионовидная роза', 'роза Ред Наоми', 'роза Эквадор', 'кустовая роза', 'ромашка', 'роза Princess Sakura', 'гипсофила'];
console.log(`Задание 2:`)
console.log(search(flowers, 'роза'));


// Задание 3
// Округлить число 32.58884:
// До меньшего целого.
// До большего целого.
// До ближайшего целого.

let num = 32.58884;
console.log(`Задание 3. Округлить число 32.58884:
  До меньшего целого - ${Math.floor(num)} 
  До большего целого - ${Math.ceil(num)} 
  До ближайшего целого - ${Math.round(num)}`
);


// Задание 4
// Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.

console.log(`Задание 4:
  Минимальное число - ${Math.min(52, 53, 49, 77, 21, 32)}
  Максимальное число - ${Math.max(52, 53, 49, 77, 21, 32)}`
);

// Задание 5
// Создать функцию, которая выводит в консоль случайное число от 1 до 10.

function getRandomNumber() {
  console.log(Math.ceil(Math.random() * 10));
}

console.log(`Задание 5:`);
getRandomNumber();


// Задание 6
// Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа. Длина массива должна быть в два раза меньше переданного числа.

function getRandomArr(num) {
  let arr = [];
  for (let i = 1; i <= (num / 2); i++) {
    arr.push(Math.floor(Math.random() * (num + 1)));
  }
  return arr;
}

console.log(`Задание 6:`);
console.log(getRandomArr(12));


// Задание 7
// Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.

function getRandomNumberBetween(min, max) {
  if (min > max) {
    let q = min;
    min = max;
    max = q;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(`Задание 7:`);
console.log(getRandomNumberBetween(2, 14));
console.log(getRandomNumberBetween(8, 1));


// Задание 8
// Вывести в консоль текущую дату.

console.log(`Задание 8:`);
console.log(Date());
console.log(new Date().toLocaleDateString('ru-RU'));


// Задание 9
// Создать переменную currentDate, хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.

console.log(`Задание 9:`);
const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(`Через 73 дня будет ${currentDate.toLocaleDateString()}`);


// Задание 10
// Написать функцию, которая принимает дату и возвращает ее в формате:

const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота',];

function prettifyDateRu(date) {
  return `Дата: ${date.getDate()}, ${months[date.getMonth()]}, ${date.getFullYear()}г. — это ${daysOfWeek[date.getDay()]} \nВремя: ${date.toLocaleTimeString()}`;
}

let d = new Date()
console.log(`Задание 10:`);
console.log(prettifyDateRu(d));
