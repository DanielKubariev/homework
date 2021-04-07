// 1.Найти минимальный элемент массива
function findMinEl(array){
	if(array === undefined){
    return 'Введите все входные данные';
  }
  var min = array[0];
  for(var i = 1; i < array.length; i++) {
    if(array[i] < min) {
      min = array[i];
    }
  }
  return min;
}
console.log(findMinEl([-1,-2,-3,-4]));




