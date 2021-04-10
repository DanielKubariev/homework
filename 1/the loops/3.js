//Найти корень натурального числа с точностью до целого
function getPodbor (num) {
  if(num === undefined){
    return 'Введите все входные данные';
  }
  for (i = 1;i < num; i++ ){
    var q = i*i;
    if (num === q) {
      return (i); 
    } 
    if(num < q) {
      return(i - 1);
    } 
  }
}
module.exports = getPodbor;