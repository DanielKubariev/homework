// 3. Принимая массив объектов и случайную строку. У объектов может быть ключ: «title» с разными значениями.
// Создайте алгоритм, который фильтрует массив, заданный как первый параметр, и возвращает массив объектов,
// которые содержат в своих заголовках заданную строку в качестве второго параметра (без учета регистра).
var arr = [
  {title: 'Some title'}, 
  {title: 'I like JS'}, 
  {nonTitle: 'This obj doesn’t have key title js'},
  {title: 'Js - is the best!'}
];

function findStr(arr,str){
  var newArr =[];
  for(var i = 0; i < arr.length; i++){
    if(String(arr[i].title).toLowerCase().includes(str.toLowerCase()) ){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}




console.log(findStr(arr, 'js')); 