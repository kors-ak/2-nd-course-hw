//1 - Генератор случайных цветов

function guessNumberGame() {
  let randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);
  let userNumber = prompt(`Введи число от 1 до 100 и испытай свою удачу!`);
  while (true) {
    if (userNumber == randomNumber) {
      alert(`Поздраляем, число угадано! Удача сегодня на твоей стороне 😉`);
      break;
    } else if (userNumber === null) {
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
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let playAgain = true;
  let greetingArray = ['Всё верно!', 'В яблочко!', 'Гениально!', 'У тебя великолепно получается!', 'Как тебе это удается? Решено отлично!', 'Именно так!', 'Идеальное решение!'];
  const operationArray = ['+', '-', '*', '/'];

  while (playAgain) {
    let greeting = greetingArray[Math.floor(Math.random() * greetingArray.length)];
    let operation = operationArray[Math.floor(Math.random() * operationArray.length)];
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

    let userAnswer = prompt(`Попробуй решить такую задачу: \n${a} ${operation} ${b} = ?`);

    while (true) {
      if (userAnswer == null) {
        playAgain = false;
        break;
      } else if (userAnswer == answer) {
        playAgain = confirm(`${greeting} Продолжаем?`);
        break;
      } else {
        userAnswer = prompt(`Вариант хороший, но неверный. Попробуй решить задачу ещё раз: \n ${a} ${operation} ${b} = ?`);
      }
    }
  }

  if (playAgain === false) {
    alert('Ждем тебя снова!')
  }
}

