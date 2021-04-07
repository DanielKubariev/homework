//	Определить какой четверти принадлежит точка 
// с координатами (х,у)
function getDot(x,y){
  if((x,y) === undefined) {
    return 'Введите входные данные';
  }
  if(x > 0 && y > 0) {
    return 'Первая четверть';
} 
  if(x < 0 && y > 0) {
    return 'Вторая четверть';
} 
  if(x < 0 && y < 0) {
    return 'Третья четверть';
} 
  if(x > 0 && y < 0) {
    return 'Четвертая четверть';
}    
   return 'Точка лежит на осях'
  
}


module.exports = getDot;