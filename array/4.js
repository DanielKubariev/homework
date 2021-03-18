// 4.Найти индекс максимального элемента массива 
var array = [1,2,30,4,5,0,-10,-24,600];
var max = array[0];
var maxIndex = 0;
for(var i = 0; i < array.length; i++) {
  if(max < array[i]) {
    max = array[i];
    maxIndex = i;

    }
}
console.log(maxIndex);
