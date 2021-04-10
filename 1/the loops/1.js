//Найти сумму четных чисел и их количество в диапазоне от 1 до 99

function findSumOfEven(a,b){
  if((a,b) === undefined){
    return 'Введите все входные данные';
  }
  var q = 0;
  var sum = 0;

  for(var i = a; i < b; i++){
    if(i % 2 === 0){
      sum += i
      q++
    }
  } 
  return [q,sum];
}
module.exports = findSumOfEven;
                            
        