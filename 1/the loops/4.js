//4.	Вычислить факториал числа n. n! = 1*2*…*n-1*n;
function findFactorial(num){
	if(num === undefined){
    return 'Введите все входные данные';
  }
  var f = 1;
  if(num < 1) {
    return 'Факториал числа n - это произведение натуральных чисел от 1 до n';
  }
  for(i = 2; i <= num; i++) {
    f *= i
  }
  return f
}
console.log(findFactorial(4));





