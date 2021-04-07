//1.	Если а – четное посчитать а*б, иначе а+б
function sumOrMul(a,b){
  if((a,b) === undefined) {
    return false;
  }
  if(a % 2 === 0) {
    return a * b;
  }
  return a + b;
}
console.log(sumOrMul(0,));

module.exports = sumOrMul;
