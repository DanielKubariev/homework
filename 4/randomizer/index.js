var arr = [];
var minInput = document.getElementById('item__row__minInputNumber');
var maxInput = document.getElementById('item__row__maxInputNumber');
var output = document.getElementById('outputRandomNumber');
var error = document.getElementById('errorLbl');

function getRandom(min,max){
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}
function generateRandomNumber(){
  var min = Number(minInput.value); 
  var max = Number(maxInput.value);
  if(min % 1 !== 0 || max % 1 !==0){
    error.innerHTML = `Please insert integer number`;
    return;
  }
  if(arr.length === max - min + 1){
    document.getElementById('generateBtn').disabled;
    output.innerHTML = `Generated number: Elements are over`
    return;
  }
  var random = getRandom(min,max);
  while(arr.includes(random)){
    random = getRandom(min,max);
  }
  arr.push(random)
  output.innerHTML = `Generated number:${random}`
}
function reset(){
  arr =[];
  minInput.value = null;
  maxInput.value = null;
  error.innerHTML = '';
  output.innerHTML = '';
}
document.getElementById('resetBtn').addEventListener('click',reset);
document.getElementById('generateBtn').addEventListener('click',generateRandomNumber);