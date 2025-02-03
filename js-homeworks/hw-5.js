// Задание 1
// Напишите функцию, которая возвращает меньшее из двух чисел.

function getSmallestNumber(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return 'Здесь что-то не так';
  }
  if (a >= b) {
    return b + ' - меньшее число';
  } else {
    return a + ' - меньшее число';
  }
}

console.log(getSmallestNumber(1, 49));
console.log(getSmallestNumber(15, -3));
console.log(getSmallestNumber(15, 'я не число'));

// Задание 2
// Напишите функцию, которая принимает число и возвращает: строку 'Число четное', если число четное; строку 'Число нечетное', если число нечетное.

function isEven(a) {
  if (isNaN(a)) {
    return `\"${a}\" - это вообще не число`;
  }
  if (a % 2 === 0) {
    return `число ${a} четное`;
  } else {
    return `число ${a} нечетное`;
  }
}

console.log(isEven(10));
console.log(isEven(17));
console.log(isEven('hi'));

// Задание 3
// Напишите функцию, которая принимает параметром число и выводит в консоль квадрат этого числа.

const showSquareOfNumber = a => isNaN(a) ? console.log(`Возвести \"${a}\" в квадрат пока не получается. Попробуйте что-нибудь другое`) : console.log(`${a} в квадрате - ${a ** 2}`)

showSquareOfNumber(3);
showSquareOfNumber(25);
showSquareOfNumber('я не число');

// Напишите функцию, которая принимает параметром число и возвращает квадрат этого числа значением — так, чтобы потом это значение можно было использовать.

const getSquareOfNumber = a => isNaN(a) ? 'Внимание! Это не число' : (a ** 2);

console.log('С этим числом можно работать: ' + getSquareOfNumber(4) + '. С числом ниже тоже:');
console.log(getSquareOfNumber(11));

// Задание 4
// Создайте функцию, которая:
// Спрашивает у пользователя, сколько ему лет. Если пользователь введет отрицательное число — выведет на экран 'Вы ввели неправильное значение'. Если пользователь введет число от 0 до 12 — выведет на экран 'Привет, друг!'. Если пользователь введет число больше или равно 13  — выведет на экран 'Добро пожаловать!'

function greeting() {
  let age = +prompt('Сколько Вам лет?');
  if (age < 0 || isNaN(age)) {
    alert('Вы ввели неправильное значение');
  } else if (age >= 0 && age < 13) {
    alert('Привет, друг!');
  } else {
    alert('Добро пожаловать!');
  }
}

greeting();

// Задание 5
// Напишите функцию, которая принимает на вход два числа, а далее следует алгоритму:
// Проверяет, являются ли переданные параметры корректными числами. Если нет — возвращает строку 'Одно или оба значения не являются числом'. Если оба параметра — числа, то возвращает произведение данных чисел.

const multiply = (a, b) => isNaN(a) || isNaN(b) ? 'Одно или оба значения не являются числом' : a * b;

console.log(multiply(11, 'a'));
console.log(multiply(11, 8));

// Задание 6
// Напишите функцию, которая выполняет следующий алгоритм:
// Запрашивает у пользователя число. Проверяет, является ли введенное значение числом. Если значение не является числом, возвращает строку 'Переданный параметр не является числом'. Если значение является числом, возвращает строку 'n в кубе равняется <получившееся значение>', где n — введенное число, а <получившееся значение> — число, возведенное в куб. Проверьте работу функции с числами от 0 до 10.

function getCubeOfNumber(a = prompt('Введите число')) {
  if (isNaN(a)) {
    return 'Переданный параметр не является числом';
  } else {
    return `${a} в кубе равняется ${a ** 3}`;
  }
}

console.log(getCubeOfNumber(0));
console.log(getCubeOfNumber(1));
console.log(getCubeOfNumber(2));
console.log(getCubeOfNumber(3));
console.log(getCubeOfNumber(4));
console.log(getCubeOfNumber(5));
console.log(getCubeOfNumber(6));
console.log(getCubeOfNumber(7));
console.log(getCubeOfNumber(8));
console.log(getCubeOfNumber(9));
console.log(getCubeOfNumber(10));
console.log(getCubeOfNumber('не число'));

// Задание 7
// Создайте два объекта, circle1 и circle2, каждый из которых имеет свойство radius. Оба объекта должны иметь:
// Метод getArea, который возвращает площадь круга, вычисляемую через радиус.
// Метод getPerimeter, который возвращает периметр окружности.

function getCircleArea() {
  return this.radius ** 2 * 3.14;
}

function getCirclePerimeter() {
  return 2 * 3.14 * this.radius;
}

let circle1 = {
  radius: 1,
  getArea: getCircleArea,
  getPerimeter: getCirclePerimeter,
}

let circle2 = {
  radius: 100,
  getArea: getCircleArea,
  getPerimeter: getCirclePerimeter,
}

console.log(`Для первого круга: площадь равна ${circle1.getArea()}, а периметр - ${circle1.getPerimeter()}`);
console.log(`Для второго круга: площадь равна ${circle2.getArea()}, а периметр - ${circle2.getPerimeter()}`);