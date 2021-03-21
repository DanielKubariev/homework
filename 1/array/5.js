// 5.Посчитать сумму элементов массива с нечетными индексами
var array = [0,1,2,-1,4];
var sum = 0;

for(var i = 0; i < array.length; i++) {
    if(i % 2 !== 0) {
        sum += array[i]
    }
}
console.log(sum);