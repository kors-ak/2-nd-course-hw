// task 1
let a = 10;
alert(a);

a = 20;
alert(a);

// task 2
const iPhoneFirst = 2007;
alert(iPhoneFirst);

// task 3
const JSCreator = 'Брендан Эйх';
alert(JSCreator);

// task 4
let b = 10;
let c = 2;
alert(b + c);
alert(b - c);
alert(b * c);
alert(b / c);

// task 5
let result = 2**5;
alert(result);

// task 6
a = 9;
b = 2;
alert(9 % 2);

// task 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

// task 8
let age = prompt('Сколько Вам лет?', 'самый лучший возраст ;)');
alert(`Поздравляем! Вам ${age} лет`);

// task 9
const user = {
  name: 'Пользователь',
  age: 22,
  isAdmin: false,
}

// task 10
const userName = prompt('Как Вас зовут?');
alert(`Привет, ${userName}!`);

// additional task
let z = prompt('Загадайте любое число');
let x = z * 2;
alert(`Если удвоить загаданное число, то получится ${x}`);
let sum = x + 10;
alert(`Прибавили 10: ${sum}`);
let division = sum / 2;
alert(`Уменьшили вдвое: ${division}`);
let userResult = division - z;
alert(`После всех вычеслений загаданное число ${z} превратилось в ${userResult}`);