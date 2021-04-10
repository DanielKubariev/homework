// Найти расстояние между двумя точками в двухмерном декартовом пространстве.
function findDistance (x1,y1,x2,y2){
  if(x1,y1,x2,y2 === undefined){
    return 'Введите все входные данные';
  }
  var distance = (x2-x1)*(x2-x1) + (y2-y1)*(y2-y1);
  return Math.sqrt(distance);
}
console.log(findDistance(1,5,5,5));