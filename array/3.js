//3. Найти индекс минимального элемента массива
var array = [1,2,3,4,5,-15];
var min = array[0];
var minIndex = 0;
for(var i = 0;i < array.length; i++){
  if(min > array[i]){
  min = array[i];
  minIndex = i;   
  }

}
console.log(minIndex);

