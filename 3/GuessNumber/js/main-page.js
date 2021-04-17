function start(){
  var min = Number(document.getElementById('item__min-input-number').value);
  var max = Number(document.getElementById('item__max-input-number').value);
  var attempts = Number(document.getElementById('item__attempts-input').value);

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
document.getElementById('default__btn').addEventListener('click', function(){
window.location.href = './game.html'
})


document.getElementById('start__btn').addEventListener('click',start);