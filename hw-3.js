// task 1
let password = 'шашлык';
let userPassword = prompt('Введите пароль');

userPassword === password ? console.log('Пароль введен верно') : console.log('Пароль введен неправильно');

// task 2
let c = 3;

c > 0 && c < 10 ? console.log('Верно') : console.log('Неверно');

// task 3
let d = 111;
let e = 10;

d > 100 || e > 100 ? console.log('Верно') : console.log('Неверно');

// task 4
let a = '2';
let b = '3';

alert(+a + +b);

// task 5
let monthNumber = prompt('Введите номер месяца')

switch (monthNumber) {
  case '1':
  case '2':
  case '12':
    console.log('Это зима');
    break;
  case '3':
  case '4':
  case '5':
    console.log('Это весна');
    break;
  case '6':
  case '7':
  case '8':
    console.log('Это лето');
    break;
  case '9':
  case '10':
  case '11':
    console.log('Это осень');
    break;
  default:
    console.log('Вы ввели что-то не то');
};

// additional task 1
let number = prompt('Пожалуйста, введите любое число')

switch (+number % 2) {
  case 0: 
    alert('Число четное');
    break;
  case 1: 
    alert('Число нечетное');
    break;
  default:
    alert('Вы ввели что-то не то'); 
};

// additional task 2
let clientOS = Boolean(confirm('У Вас Android?'));

clientOS == 1 ? console.log('Установите версию приложения для Android по ссылке') : console.log('Установите версию приложения для iOS по ссылке');

// additional task 3
let clientDeviceYear = Boolean(confirm('Ваш телефон произведен до 2015 года?'));

if (clientOS == 1 && clientDeviceYear == 0) {
  console.log('Установите версию приложения для Android по ссылке');
} else if (clientOS == 1 && clientDeviceYear == 1) {
  console.log('Установите облегченную версию приложения для Android по ссылке');
} else if (clientOS == 0 && clientDeviceYear == 0) {
  console.log('Установите версию приложения для iOS по ссылке');
} else {
  console.log('Установите облегченную версию приложения для iOS по ссылке');
}