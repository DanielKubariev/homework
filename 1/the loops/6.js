// Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, 
// задано число 123, вывести 321.
function mirror(a){
	if(a === undefined){
    return 'Введите все входные данные';
  }
	var b, result = 0;
	while (a > 0) {
  	b = a % 10;
  	result = result * 10 + b;
    a = parseInt (a/10);
	}
	return result;
}
console.log(mirror(123));
