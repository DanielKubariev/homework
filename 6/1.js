// 1.Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.
// Правила:
// -Яйца варить 5 минут
// -Вместительность емкости не более 5 яиц одновременно

// function getCookingTime (eggsAmount) {
// let result;
// //Your code here

// return result;
// }

function getCookingTime(num){
  return Math.ceil(num / 5) * 5;
  } 
console.log(`варим ` + getCookingTime(25)+` минут`);

