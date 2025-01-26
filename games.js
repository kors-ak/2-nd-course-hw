// Общие функции:

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1 - Угадай число

function guessNumberGame() {
  let randomNumber = getRandomNumber(1, 100);
  console.log(randomNumber);

  let taskArray = ['Введи число от 1 до 100 и испытай свою удачу!', 'Брось вызов судьбе! Какое число от 1 до 100 ты выберешь?', 'Испытай свою интуицию! Введи число от 1 до 100 и поймай удачу за хвост!', 'Сможешь ли ты угадать? Введи число от 1 до 100 и покажи, на что способен!', 'Какое число скрывается за завесой тайны? Введи свой вариант от 1 до 100!', 'Введи число от 1 до 100 и посмотрим, угадаешь ли ты!'];
  let greetingArray = ['Поздраляем, число угадано! Удача сегодня на твоей стороне 😉', 'Верно!', 'Именно так!', 'Ты великолепен!', 'Блестящая победа!'];

  let userNumber = prompt(`${taskArray[getRandomNumber(0, taskArray.length - 1)]}`);
  while (true) {
    if (userNumber == randomNumber) {
      alert(`${greetingArray[getRandomNumber(0, greetingArray.length - 1)]} Загаданное число: ${randomNumber}`);
      break;
    } else if (userNumber === null) {
      alert(`Ждем тебя снова! \nЗагаданное число было ${randomNumber}`);
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

// 2 - Простая арифметика

function arithmeticGame() {

  let greetingArray = ['Всё верно!', 'В яблочко!🎯', 'Гениально!', 'У тебя великолепно получается!', 'Как тебе это удается? Решено отлично!', 'Именно так!', 'Идеальное решение'];
  let tryAgainArray = ['Вариант хороший, но неверный.', 'Почти правильно!', 'Не совсем верно.', 'У тебя обязательно получится!'];
  let taskArray = ['Попробуй решить такую задачу:', 'Задачка специально для тебя!', 'Найдешь решение для следующей задачи?'];
  const operationArray = ['+', '-', '*', '/'];

  let playAgain = true;

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

// 3 - Переверни текст

function textTurnGame() {

  let taskArray = ['Введи текст, который хочешь прочитать задом наперед:', 'Текст сюда, и он станет с ног на голову!', 'Введи свой текст и посмотри, что получится!', 'Ну-ка, давай текст, посмотрим, как он перевернется!', 'Испытай свой текст на переворот!', 'Введи любой текст, и он будет перевернут', 'Дай-ка мне текст, и я его переверну!', 'Введи текст, и он станцует задом наперед!', 'Какой текст станет самым забавным задом наперед? Попробуй!', 'Готов перевернуть свой текст? Вводи его!'];
  let greetingArray = ['Та-дам! Вот что получилось:', 'Вуаля, твой текст перевернулся:', 'Вот это поворот!', 'Магия переворота сработала!', 'Вот твой текст, но с другой стороны!', 'Абракадабра! Текст перевернулся!', 'Трансформация завершена!', 'Твой текст совершил путешествие на обратную сторону!', '🤪 Что-то пошло не так... или так?', 'Поздравляю, твой текст теперь говорит на другом языке!'];

  let playAgain = true;

  while (playAgain) {
    let userAnswer = prompt(`${taskArray[getRandomNumber(0, taskArray.length - 1)]}`);
    if (userAnswer === null) {
      alert('Ждем тебя снова!');
      break;
    }
    let result = userAnswer.split('').reverse().join('');
    let greeting = greetingArray[getRandomNumber(0, greetingArray.length - 1)];
    playAgain = confirm(`${greeting} \n${result} \nПродолжаем?`);
  }

  if (playAgain === false) {
    alert('Ждем тебя снова!');
  }
}