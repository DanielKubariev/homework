//5.	Посчитать сумму цифр заданного числа
function findSumOfNumberEl(a){
	if(a === undefined){
    return 'Введите все входные данные';
  }
	var result = 0;
	if (a < 0){
   	 a = a * (-1);
	}
	while (a !== 0)  {
    	result += a % 10;
    	a = (a - a % 10) / 10;
	}
	return result;
}
console.log(findSumOfNumberEl(-111));


