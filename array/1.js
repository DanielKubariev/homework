// 1.Найти минимальный элемент массива
var array = [1,2,-3,4];
var min = array[0];
for(var i = 0; i < array.length;i++) {
  if(array[i] < min) {
    min = array[i];
  }
}
console.log(min);




