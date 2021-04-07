//3. Найти индекс минимального элемента массива
function findMinElIndex(array){
	if(array === undefined){
    return 'Введите все входные данные';
  } 
  var min = array[0];
  var minIndex = 0;
  for(var i = 0;i < array.length; i++){
    if(min > array[i]){
    min = array[i];
    minIndex = i;   
    }
  } 
  return minIndex;
}
console.log(findMinElIndex([10,2,3,4,5,15]));

