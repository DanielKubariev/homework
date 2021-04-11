// Найти расстояние между двумя точками в двухмерном декартовом пространстве.
function findDistance (x1,y1,x2,y2){
  if(x1,y1,x2,y2 === undefined){
    return 'Введите все входные данные';
  }
  if(typeof x1 !== 'number',
     typeof y1 !== 'number',
     typeof x2 !== 'number',
     typeof y2 !== 'number'){
     return 'Введите числа!';
  }
  var distance = (x2-x1)*(x2-x1) + (y2-y1)*(y2-y1);
  return Math.sqrt(distance);
}
console.log(findDistance(1,2,8,2));
module.exports = findDistance;