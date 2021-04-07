// 6.Сделать реверс массива (массив в обратном направлении)
function reverseArr(array){
	if(array === undefined){
    return 'Введите все входные данные';
  }   
  var reverse = [];
  for(var i = array.length - 1; i >= 0; i--){
    reverse.push(array[i]);
  }
  return reverse;
}
console.log(reverseArr([1,2,3,4]));