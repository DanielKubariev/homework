// 3) Написать функцию every, которая будет принимать первым аргументом массив, 
// а вторым функцию колбэк(которая будет принимать каждый элемент массива и возвращать true либо false). 
// Результатом функции должно быть логическое выражение true/false  в зависимости от того, выполняется ли условие для каждого из элементов.

// Example:
// every([8, 2, 4], function (num){
// 	return  num%2===0
// })  // true

function checkEven(num) {
  return num % 2 === 0;
}

function every(array, callback) {
  for(var i = 0; i < array.length; i++) {
    if(!callback(array[i])) {
      return false;
    }
  }
  return true;
}

console.log(every([8,1,4], checkEven));
module.exports = {
  checkEven,
  every
}



