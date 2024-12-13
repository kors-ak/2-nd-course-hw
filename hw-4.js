// task 1
for (let i = 0; i < 2; i++) {
  console.log('Привет');
}

// task 2
for (let i = 1; i >= 1 && i <= 5; i++) {
  console.log(i);
}

// task 3
for (let i = 7; i <= 22; i++) {
  console.log(i);
}

// task 4
let obj = {
  "Коля" : '200',
  "Вася" : '300',
  "Петя" : '400',
}

for (const key in obj) {
  console.log(`${key} - зарплата ${obj[key]} долларов`);
}

// task 5
let n = 1000;
let iterations = 0;

while (n >= 50) {
  n /= 2;
  console.log(n);
  iterations++;
}

console.log(`Результат деления: ${n}`);
console.log(`Количество итераций: ${iterations}`);

// task 6
let firstFriday = 6;
let monthDays = 31;

while (firstFriday <= monthDays) {
  console.log(`Сегодня пятница, ${firstFriday}-е число. Необходимо подготовить отчет.`);
  firstFriday += 7;
}

// additional task 1
let k = 100;
iterations = 0;

while (k >= 0) {
  k -=7;
  console.log(k);
  iterations++;
}

console.log(`Результат: ${k}`);
console.log(`Количество итераций: ${iterations}`);

// additional task 2
let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

for (let i = 0; i < months.length; i++) {
  console.log(`${months[i]} - это ${i+1}-й месяц в году`);
}

// additional task 3
const book = {
  'Название' : 'Ампир V',
  'Автор' : 'Виктор Пелевин',
  'Год издания' : '1993',
  'Жанр' : 'постмодернистский роман, философская фантастика',
}

for (const key in book) {
  console.log(`${key}: ${book[key]}`);
}

// additional task 4 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let randomNumbers = [];
for (let i = 0; i < 10; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100));
}
console.log(`Массив из 10 случайных чисел: ${randomNumbers}`);

let smallestNumber = 100;
for (let i = 0; i < randomNumbers.length; i++) {
  if (smallestNumber >= randomNumbers[i]) {
    smallestNumber = randomNumbers[i];
  } else {
    continue;
  }
}
console.log(`Наименьшее число этого массива: ${smallestNumber}`);