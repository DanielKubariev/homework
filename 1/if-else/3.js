// Найти суммы только положительных из трех чисел

function sumOfPositive(a,b,c){
  if(a,b,c === undefined){
    return 'Введите все входные данные';
  }
  var result  = null;
  if(a > 0) {
    result += a;
  } 
  if(b > 0) {
    result += b;
  }
  if(c > 0) {
    result += c;
  }
  return result;
}

module.exports = sumOfPositive;


