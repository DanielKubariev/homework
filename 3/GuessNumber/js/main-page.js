function start(){
  var min = Number(document.getElementById('item__minInputNumber').value);
  var max = Number(document.getElementById('item__maxInputNumber').value);
  var attempts = Number(document.getElementById('item__attemptsInput').value);

  if(min > 0 && min <= 200 && min % 1 === 0 && max > 0 && max <= 200 && max % 1 === 0 && max >= min && attempts > 0 && attempts < 16 && attempts % 1 === 0){
    var config = {
      "min": min,
      "max": max,
      "attempts": attempts
    }
    localStorage.setItem('config',JSON.stringify(config));
   
    window.location.href= './game.html'
    
    localStorage.getItem('config', JSON.stringify(config));

  } else {
    document.getElementById('item__error').innerHTML = 'Ошибка при вводе данных!';
  }

}
document.getElementById('btn__Default').addEventListener('click', function(){
window.location.href = './game.html'
})


document.getElementById('start__btn').addEventListener('click',start);