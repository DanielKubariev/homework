// 1) Напишите функцию getDays, которая принимает год и месяц, а возвращает количество дней в месяце
console.log(getDays( 2021 , 4))  //30
console.log(getDays( 2021 , 'April'))  //30

function getDays(year,month){
  if(year,month === undefined){
    return 'Введите все входные данные'
  }
  var array = [31,28,31,30,31,30,31,31,30,31,30,31];
  var obj = {
    January: array[0],
    February: array[1],
    March: array[2],
    April: array[3],
    May: array[4],
    June: array[5],
    July: array[6],
    August: array[7],
    September: array[8],
    October: array[9],
    November: array[10],
    December: array[11],
  }
  if((year % 100 === 0 && year % 400 !== 0) && (month === 2 || month === 'February')){
    console.log('сюда попал');
    return 28;
  }
  if(year % 4 === 0 || (year % 100 === 0 && year % 400 === 0) && (month === 2 || month === 'February')){
    console.log('сюда попал');
    return 29;
  }
  if(typeof month === 'number'){
    return array[month - 1];
  }
  return obj[month];
 
}
module.exports = getDays;
