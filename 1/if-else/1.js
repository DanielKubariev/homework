//1.	Если а – четное посчитать а*б, иначе а+б
function sumOrMul(a,b){
  if (a % 2 === 0) {
    return a * b;
  }
  return a + b;
}
console.log(sumOrMul(2,3))