//	Посчитать выражение (макс(а*б*с, а+б+с))+3
function calculate(a,b,c){
	if(a,b,c === undefined){
    return 'Введите все входные данные';
  }
	if (a*b*c > a+b+c){
		return a*b*c + 3;
	} 
		return a+b+c+3;
}

module.exports = calculate;