//2.	Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
function getProstoeNum(n){
	if(n === undefined){
    return 'Введите все входные данные';
  }
  if(n === 2|| n === 1) {
    return  `простое число`
  }
  if(n < 1 || n % 1 !== 0){
    return 'не простое число'
  }
  for(var i = 2; i < n; i++){
    if(n % i === 0){
      return `не простое число`
    }
    return `простое число`
  }
}
console.log(getProstoeNum(11));

module.exports = getProstoeNum;