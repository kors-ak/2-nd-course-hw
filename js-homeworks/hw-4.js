// task 1
let i = 0;
while (i < 2) {
  console.log('Привет');
  i++;
}

// task 2
i = 1;
while (i >= 1 && i <= 5) {
  console.log(i);
  i++;
}

// task 3
i = 7;
while (i <= 22) {
  console.log(i);
  i++;
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

do {
  n /= 2;
  console.log(n);
  iterations++;
} while (n >= 50);

console.log(`Результат деления: ${n}`);
console.log(`Количество итераций: ${iterations}`);

// task 6
let firstFriday = 6;
let monthDays = 31;

do {
  console.log(`Сегодня пятница, ${firstFriday}-е число. Необходимо подготовить отчет.`);
  firstFriday += 7;
} while (firstFriday <= monthDays);

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
let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

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

// additional task 4
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