// Поменять местами первую и вторую половину массива, например, для массива  1 2 3 4, результат 3 4 1 2

function switchHalfsOfArr(array){
	if(array === undefined){
    return 'Введите все входные данные';
  }   
  var replace = [];
  for(var i = parseInt((array.length)/2); i < array.length; i++){
    replace.push(array[i]);
  }
  for(i = 0; i < parseInt(array.length/2); i++){
    replace.push(array[i]);
  }
  return replace;
}
console.log((switchHalfsOfArr([1,2,3,4,5,6])))

