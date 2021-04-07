//2.Найти максимальный элемент массива
function findMaxEl(array){
	if(array === undefined){
    return 'Введите все входные данные';
  }
	var max = array[0];
	for(var i = 0; i < array.length; i++){
    if(max < array[i]) {
			max = array [i];
    }
	} 
	return max;
}



console.log(findMaxEl([-1,-2,-3,4]));


