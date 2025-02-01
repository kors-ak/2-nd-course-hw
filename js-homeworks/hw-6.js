// Задание 1
const arrayTask1 = [1, 5, 4, 10, 0, 3];
console.log(`Задание 1 \nДан массив: \n${arrayTask1}`);

for (let i = 0; i < arrayTask1.length; i++) {
  console.log(arrayTask1[i]);
  if (arrayTask1[i] === 10) {
    break;
  }
}

// Задание 2
const arrayTask2 = [1, 5, 4, 10, 0, 3];
console.log(`Задание 2 \nДан массив: \n${arrayTask2}`);
console.log(`Индекс числа 4 - ${arrayTask2.indexOf(4)}`);

// Задание 3
const arrayTask3 = [1, 3, 5, 10, 20];
console.log(`Задание 3 \nДан массив: \n${arrayTask3}`);
console.log(arrayTask3.join(' '));

// Задание 4
console.log(`Задание 4`);
let arrayTask4 = [];

for (let q = 0; q < 3; q++) {
  let array = [];
  for (let i = 0; i < 3; i++) {
    array.push(1);
  }
  arrayTask4.push(array);
}

console.log(arrayTask4);

// Задание 5
const arrayTask5 = [1, 1, 1];
console.log(`Задание 5 \nДан массив: \n${arrayTask5}`);

arrayTask5.push(2, 2, 2);
console.log(arrayTask5);

// Задание 6
const arrayTask6 = [9, 8, 7, 'a', 6, 5];
console.log(`Задание 6 \nДан массив: \n${arrayTask6}`);

arrayTask6.sort();
const result = arrayTask6.filter(item => typeof item === "number");
console.log(result);

// Задание 7
const arrayTask7 = [9, 8, 7, 6, 5];
console.log(`Задание 7 \nДан массив: \n${arrayTask7}`);

let userNumber = +prompt('Попробуй угадать число от 1 до 10');

if (arrayTask7.includes(userNumber)) {
  alert('Угадал');
} else {
  alert('Не угадал');
}

// Задание 8
const string = 'abcdef';
console.log(`Задание 8 \nДана строка: \n${string}`);
console.log(string.split('').reverse().join(''));

// Задание 9
const arrayTask9 = [[1, 2, 3],[4, 5, 6]];
console.log(`Задание 9`);

let result9 = [];
for (let i = 0; i < arrayTask9.length; i++) {
  result9.push(...arrayTask9[i]);
}
console.log(result9);

// Задание 10
console.log(`Задание 10`);
let arrayTask10 = [];

for (let i = 0; i < 10; i++) {
  arrayTask10.push(Math.floor(Math.random() * 10 + 1));
}
console.log(arrayTask10);

for (let i = 1; i < arrayTask10.length; i++) {
  console.log(arrayTask10[i - 1] + arrayTask10[i]);
}

// Задание 11
console.log('Задание 11');

function arraySquare(array) {
  return array.map(item => item ** 2);
}

let arrayTask11 = [2, 3, 4, 5, 10, 11];
console.log(arraySquare(arrayTask11));

// Задание 12
console.log('Задание 12');

function ToQuantity(array) {
  return array.map(item => item.split('').length);
}

const arrayTask12 = ['a', 'abc', 'abcde', 'abcdefg'];
console.log(ToQuantity(arrayTask12));

// Задание 13
console.log('Задание 13');

function keepNegativeNumbers(array) {
  return array.filter(item => item < 0);
}

const arrayTask13 = [1, 2, 10, -1, -3, 12, -7, 9, -11, 15];
console.log(keepNegativeNumbers(arrayTask13));

// Задание 14
console.log('Задание 14');

let arrayTask14 = [];

for (let i = 0; i < 10; i++) {
  arrayTask14.push(Math.floor(Math.random() * 11));
}

evenArray = arrayTask14.filter(item => item % 2 === 0);

console.log(arrayTask14);
console.log(evenArray);

// Задание 15
console.log('Задание 15');

let arrayTask15 = [];

for (let i = 0; i < 6; i++) {
  arrayTask15.push(Math.floor(Math.random() * 10 + 1));
}

console.log(arrayTask15);
console.log(arrayTask15.reduce((a, b) => a + b) / arrayTask15.length);