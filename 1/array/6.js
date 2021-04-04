// 6.Сделать реверс массива (массив в обратном направлении)
var arr = [1,2,3,4];
var reverse = [];
for(var i = arr.length - 1; i >= 0; i--){
  reverse.push(arr[i]);
}
console.log(reverse);