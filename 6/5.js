// 5. Принимая число, ваша функция должна найти следующий положительный палиндром большего размера.
// Палиндром - это слово, фраза, число или другая последовательность символов, которая читается так же, как вперед и назад, например, «мадам».
// function getNextPalindrome(number) {
// let result;
// //Your code here
// return result;
// }
// getNextPalindrome(7) // returns 11

function getPalindrome(num){
  num = num.toString();
  for(var i = 0; i < Math.round(num.length / 2); i++){
    if(num[i] !== num[num.length-i-1]){
      return false;
    } 
  } 
  return true;
}

function getNextPalindrome(num){
  while((getPalindrome(num)) === false){
    num++
  } 
  return num;
}
console.log(getNextPalindrome(1));

