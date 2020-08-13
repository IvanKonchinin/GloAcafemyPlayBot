'use strict';
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function quessNumber() {

  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let count = 10;

  function bot(randomNumber, count) {
    let userNumber = prompt('Угадай число от 1 до 100');

    if (count <= 0) {
      alert('Попытки закончились!');
      if (confirm('Хотите сыграть еще!')) {
        quessNumber();
      } else {
        alert('До свидания');
        return;
      }
    }
    else if (userNumber === null) {
      alert('До свидания');
      return;
    } 
    else if(!isNumber(userNumber)){
    alert('Введите число!');
    bot(randomNumber, count);
    } 
    else if(randomNumber < userNumber){
    count--;
    alert('Загаданное число меньше, осталось: ' + count + ' попыток');
    bot(randomNumber, count);
    }
    else if(randomNumber > userNumber){
    count--;
    alert('Загаданное число больше, осталось: ' + count + ' попыток');
    bot(randomNumber, count);
    } else {
      alert('Поздравляю, вы угадали!!!');
      if (confirm('Хотите сыграть еще?')) {
        quessNumber();
      } else {
        alert('До свидания');
        return;
      }
    }
  }
  return bot(randomNumber, count);
}

quessNumber();
