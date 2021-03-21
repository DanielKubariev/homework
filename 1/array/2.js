//2.Найти максимальный элемент массива
var array = [-1,-2,-3,4];
var max = array[0];
for(var i = 0; i < array.length; i++){
    if(max < array[i]) {
        max = array [i];
    }
} console.log(max);


