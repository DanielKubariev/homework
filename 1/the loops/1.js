//Найти сумму четных чисел и их количество в диапазоне от 1 до 99

// var sum = 0;
// var q = 0;
// for (var i = 2; i < 99; i += 2) {
//   sum += i;
//   q++; 
// }
// console.log(sum);
// console.log(q);
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
console.log(findSumOfEven(1,199));

//1 2 3 4 ...  99
          
                            
        