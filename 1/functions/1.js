// Получить строковое название дня недели по номеру дня. 

function getDayName(a){
  if(a === undefined){
    return 'Введите все входные данные';
  }
  if(a === 1) return 'Monday';
  if(a === 2) return 'Tuesday';
  if(a === 3) return 'Wednesday';
  if(a === 4) return 'Thursday';
  if(a === 5) return 'Friday';
  if(a === 6) return 'Saturday';
  if(a === 7) return 'Sunday';
  else return 'incorrect number'
}
console.log(getDayName(8));