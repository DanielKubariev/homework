function selectionSort(arr) {
  if(arr === undefined){
    return 'Введите все входные данные';
  }   
  for (var i = 0; i < arr.length - 1; i++) {
      var indexMin = i;
      for (var j = i + 1; j < arr.length; j++) {
          if (arr[indexMin] > arr[j]) {
              indexMin = j;
        }
      }
      if (indexMin !== i) {
          [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
      }
  }
  return arr;
};
console.log(selectionSort([5,4,3,2,1]));
module.exports = selectionSort;
