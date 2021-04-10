//3.	Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)

function getBinar (num) {
	if(num === undefined){
  	return 'Введите все входные данные';
  }
  var b = 1;
  while(b < num) {
		var i = (b + num / b) / 2;
		if  (i === b) break;
		b = i;
	}
  return Math.round(b);
}

module.exports = getBinar;


