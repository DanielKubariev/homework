// 7. Посчитать количество нечетных элементов массива

var arr = [1,2,3,3];
var q = 0;
for(var i = 0; i < arr.length; i++){
  if(arr[i] % 2 !== 0){
    q++;
  }
}
console.log(q);