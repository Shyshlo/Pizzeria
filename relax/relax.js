const timer = 30;    //минуты 
//далее переводим минуты в секунды
let amountTime = timer * 60; //let - т.к. счет меняется всегда

function calculateTime() {
    const countdown = document.querySelector('#countdown');
  //можно проверить в консоль, но с вызовам ф-ции

  let minutes = Math.floor(amountTime/60);     //округление минут 
  let seconds = amountTime%60;   //рассчитываем сколько секунд будет(остаток который не вошел в минуты)

  if (seconds < 10) {
      seconds = '0' + seconds;    // добавляет 0 к секундам до 10
  }

  countdown.textContent = `${minutes} : ${seconds}`;
  amountTime--;    // к-й раз отнимаем и минуты и секунды

  if (amountTime < 0) {
      stopTimer();
      amountTime = 0;
  }
  function stopTimer() {
      clearInterval(timerID);
  }
}

let timerID = setInterval(calculateTime, 1000); //вызывает ф-ю каждую секунду
