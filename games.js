// Генератор случайных цветов

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