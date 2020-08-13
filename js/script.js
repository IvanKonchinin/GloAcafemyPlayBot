'use strict';
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function quessNumber(randomNumber, count) {
  
  let userNumber = prompt('Угадай число от 1 до 100');
   if (count <= 0) {
    alert('Попытки закончились!');
    if (confirm('Хотите сыграть еще!')) {
      quessNumber(getRandomInRange(1, 100), 10);
    } else {
      alert('До свидания');
      return;
    }
  }
  else if(userNumber === null){
     alert('До свидания');
    return;
  } 
  else if(!isNumber(userNumber)){
    alert('Введите число!');
    quessNumber(randomNumber, count);
  } 
 
  else if(randomNumber < userNumber){
    count--;
    alert('Загаданное число меньше, осталось: ' + count + ' попыток');
    quessNumber(randomNumber, count);
  } 
  else if(randomNumber > userNumber){
    count--;
    alert('Загаданное число больше, осталось: ' + count + ' попыток');
    quessNumber(randomNumber, count);
  }
  else {
    alert('Поздравляю, вы угадали!!!');
    if(confirm('Хотите сыграть еще?')){
      quessNumber(getRandomInRange(1, 100), 10);
    }else{
      alert('До свидания');
      return;
    }
  }
}

quessNumber(getRandomInRange(1, 100) , 10);
