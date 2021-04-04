//	Определить какой четверти принадлежит точка 
// с координатами (х,у)
function getDot(x,y){
  if(x > 0 && y > 0) {
    return 'Первая четверть';
} else if (x < 0 && y > 0) {
    return 'Вторая четверть';
} else if (x < 0 && y < 0) {
    return 'Третья четверть';
} else if (x > 0 && y < 0) {
    return 'Четвертая четверь';
} else { 
    return 'Не в четверти'
  } 
}
console.log(getDot(-1,0));