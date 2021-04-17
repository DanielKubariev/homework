//Web приложение, при запуске которого пользователю предлагается угадать число от 1 до 100 за 5 попыток. 
//В реализации необходимо предусмотреть вариант настроек диапазона чисел (валидация: не отрицательные, без плавающей точки, минимум = 1, максимум = 200) 
//и количества попыток (валидация: не отрицательные, без плавающей точки, минимум = 1, максимум = 15).
var num;
var q;
var aimNumber, previousNumber, tries, attempts;

function getRandomInt(min,max){
  min = Math.floor(min);
  max = Math.ceil (max) + 1;
  
  var random = Math.floor(Math.random() * (max - min)) + min;

  return random;
}

function loaded(){
  var min, max;
  if(localStorage.getItem('config') === null){
    min = 1;
    max = 100;
    attempts = 5;
    
  } else {
    var config = JSON.parse(localStorage.getItem('config'));
    min = config.min;
    max = config.max;
    attempts = config.attempts;
  }

  aimNumber = getRandomInt(min,max);
  tries = 0;
  console.log(aimNumber);

 
  document.getElementById('hello-lbl').innerHTML =
  `Привет, я загадал число от ${min} до ${max} попробуй угадать его за ${attempts} раз`;

  
}
document.addEventListener('DOMContentLoaded',loaded);

function guessNumber() {
  var number = Number(document.getElementById('number-input').value);
  var helpLabel = document.getElementById('help-lbl');
  tries++

  if(number === aimNumber) {
  helpLabel.innerHTML = `Поздравляем! Ты отгадал(а) задуманное числа за ${tries} раз. Через 5 секунд вернемся на страницу настроек! :)`
  setTimeout(function(){
    window.location.href = './index.html'
  }, 5000);
  return;
}
  if(attempts - tries === 0) {
    helpLabel.innerHTML = 'Жаль, но ты проиграл(а)! Через 5 секунд вернемся на страницу настроек'
    setTimeout(function(){
      window.location.href = './index.html'
    }, 5000);
    return;
  }

    if(previousNumber === undefined){
      helpLabel.innerHTML = 'Не угадал(а) :( Попробуй еще раз'
    } else {
      if(Math.abs(aimNumber - number) > Math.abs(aimNumber - previousNumber)){
        helpLabel.innerHTML = `Не угадал(а), холоднее... \nОсталось ${attempts-tries} попыток`
      } else {
        helpLabel.innerHTML = `Не угадал(а), но теплее... \nОсталось ${attempts-tries} попыток`
      }
   } 
   previousNumber = number;
}
document.getElementById('guess__btn').addEventListener('click',guessNumber);
function exit() {
  window.location.href = './index.html';
}
document.getElementById('exit__btn').addEventListener('click', exit);

window.addEventListener('unload', function(){
  localStorage.removeItem('config')
})