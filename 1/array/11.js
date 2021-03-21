var arr = [];
var n = 7;

for(var i = 0; i < n; i++){
  arr.push([])
  for(var j = 0; j <n; j++){
    arr[i].push(false)
  }
}
// рисунок1
for(i = 0; i < n; i++){
  for(j = 0; j < n; j++){
    arr[i][j] == true
  }
}

function printArray(array) { 
  var result ='';
  for(var i = 0; i < array.length; i++) {
    for(var j = 0; j < array[i].length; j++) {
      if(array[i][j] === true) {
        result = '* ';
      } else {
        result += '  ';
      }
    }
    result += '\n';
  }
  console.log(result);
}
printArray(arr)
