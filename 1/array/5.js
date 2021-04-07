// 5.Посчитать сумму элементов массива с нечетными индексами
function calcSumOfOddIndexEl(array){
	if(array === undefined){
    return 'Введите все входные данные';
  } 

  var sum = 0;
  for(var i = 0; i < array.length; i++) {
  	if(i % 2 !== 0) {
    	sum += array[i];
		}
  }
	return sum;
}
console.log(calcSumOfOddIndexEl([2,1,2,1,2,1]));