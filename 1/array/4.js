// 4.Найти индекс максимального элемента массива 

function findMaxElIndex(array){
	if(array === undefined){
    return 'Введите все входные данные';
  } 
  var max = array[0];
  var maxIndex = 0;
  for(var i = 0; i < array.length; i++) {
    if(max < array[i]) {
      max = array[i];
      maxIndex = i;
    }
  } 
  return maxIndex;
}
console.log(findMaxElIndex([10,2,3,4,5,15]));
