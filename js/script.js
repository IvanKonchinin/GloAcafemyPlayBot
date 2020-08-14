'use strict';
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function quessNumber() {

  let number = Math.floor(Math.random() * 100) + 1;
  let col = 10;

  function bot() {
    let userNumber = prompt('Угадай число от 1 до 100');

    if (col <= 0) {
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
      bot();
    } 
    else if(number < userNumber){
      col--;
      alert('Загаданное число меньше, осталось: ' + col + ' попыток');
      bot();
    }
    else if(number > userNumber){
      col--;
      alert('Загаданное число больше, осталось: ' + col + ' попыток');
      bot();
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
  return bot();
}

quessNumber();
