// Получить строковое название дня недели по номеру дня. 

function getDayName(a){
  if(a === undefined){
    return 'Введите все входные данные';
  }
  if(typeof a !== 'number'){
    return 'Введите число от 1 до 7';
  }
  if(a < 1 || a > 7){
    return 'Введите число от 1 до 7'
  } 
  var result = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
  ]
  return result[a-1]
}
console.log(getDayName(7));
module.exports = getDayName;