// 7. Посчитать количество нечетных элементов массива
function findSumOfOddEl(array){
	if(array === undefined){
    return 'Введите все входные данные';
  }   
  var q = 0;
  for(var i = 0; i < array.length; i++){
    if(array[i] % 2 !== 0){
     q++;
    }
  } return q;
}
console.log(findSumOfOddEl([1,1,2,2,1]));

module.exports = findSumOfOddEl;
