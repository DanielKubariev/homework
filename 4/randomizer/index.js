var arr = [];
var minInput = document.getElementById('item__row__min-input-number');
var maxInput = document.getElementById('item__row__max-input-number');
var output = document.getElementById('output-random-number');
var error = document.getElementById('error-lbl');

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
    document.getElementById('generate-btn').disabled = true;
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
  document.getElementById('generate-btn').disabled = false;
}
document.getElementById('reset-btn').addEventListener('click',reset);
document.getElementById('generate-btn').addEventListener('click',generateRandomNumber);