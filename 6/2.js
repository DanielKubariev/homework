// 2.Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.
// getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]) //returns 4
// getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]) //returns 13

function getNumber(arr){
  var q = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      q++;
      if(q > 1){
        break;
      }
    }
  }
  if(q > 1){
    for(var i = 0; i < arr.length; i++){
      if(arr[i] % 2 !== 0) {
        return arr[i];
      }
    }
  }
  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      return arr[i];
    }
  }
}
console.log(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]));

