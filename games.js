// Общие функции:

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//1 - Генератор случайных цветов

function guessNumberGame() {
  let randomNumber = getRandomNumber(1, 100);
  console.log(randomNumber);
  let userNumber = prompt(`Введи число от 1 до 100 и испытай свою удачу!`);
  while (true) {
    if (userNumber == randomNumber) {
      alert(`Поздраляем, число угадано! Удача сегодня на твоей стороне 😉`);
      break;
    } else if (userNumber === null) {
      alert('Ждем тебя снова!')
      break;
    } else  if (userNumber < randomNumber) {
      userNumber = prompt(`Упс, твое число оказалось меньше загаданного! Попробуй ввести значение больше ⭡`);
    } else if (userNumber > randomNumber) {
      userNumber = prompt(`Упс, твое число оказалось больше загаданного! Попробуй ввести значение меньше ⭣`);
    } else {
      userNumber = prompt(`Ты уверен, что ввел число? Попробуй еще раз`);
    }
  }
}

//2 - Простая арифметика

function arithmeticGame() {
  let playAgain = true;
  let greetingArray = ['Всё верно!', 'В яблочко!', 'Гениально!', 'У тебя великолепно получается!', 'Как тебе это удается? Решено отлично!', 'Именно так!', 'Идеальное решение!'];
  let tryAgainArray = ['Вариант хороший, но неверный.', 'Почти правильно!', 'Не совсем верно.', 'У тебя обязательно получится!'];
  let taskArray = ['Попробуй решить такую задачу:', 'Задачка специально для тебя 😉', 'Найдешь решение для следующей задачи?'];
  const operationArray = ['+', '-', '*', '/'];

  while (playAgain) {
    let operation = operationArray[getRandomNumber(0, operationArray.length - 1)];
    let a;
    let b;
    let answer;

    switch (operation) {
      case '+':
        a = getRandomNumber(1, 30);
        b = getRandomNumber(1, 30);
        answer = a + b;
        break;
      case '-':
        a = getRandomNumber(1, 30);
        b = getRandomNumber(1, a);
        answer = a - b;
        break;
      case '*':
        a = getRandomNumber(1, 12);
        b = getRandomNumber(0, 12);
        answer = a * b;
        break;
      case '/':
        b = getRandomNumber(1, 10);
        answer = getRandomNumber(1, 10);
        a = b * answer;
        break;
    }

    let task = taskArray[getRandomNumber(0, taskArray.length - 1)];
    let userAnswer = prompt(`${task} \n${a} ${operation} ${b} = ?`);

    while (true) {
      if (userAnswer == null) {
        playAgain = false;
        break;
      } else if (userAnswer == answer) {
        let greeting = greetingArray[getRandomNumber(0, greetingArray.length - 1)];
        playAgain = confirm(`${greeting} Продолжаем?`);
        break;
      } else {
        let tryAgain = tryAgainArray[getRandomNumber(0, tryAgainArray.length - 1)];
        userAnswer = prompt(`${tryAgain} Попробуй решить задачу ещё раз: \n ${a} ${operation} ${b} = ?`);
      }
    }
  }

  if (playAgain === false) {
    alert('Ждем тебя снова!');
  }
}

