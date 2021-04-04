var arr = [];//function createMatrix
var n = 7;

for(var i = 0; i < n; i++ ){
  arr.push([]);
  for(var j = 0; j < n; j++){
    arr[i].push(false);
  }
}

for(var i = 0; i < arr.length; i++){
    arr[i][0] = true;
    for(var j = 0; j < arr[i].length; j++){
      arr[0][j] = true;
  }
}

for(var i = arr.length - 1; i > 0; i--){
  arr [i][arr[i].length-1] = true;
  for(var j = arr[i].length - 1; j > 0; j--){
    arr[arr.length-1][j] = true;
  }
}

for(var i = 0; i < arr.length; i++ ){
  arr[i][i] = true;
}
for(var i = 0; i < arr.length; i++){
  var j = arr.length - i - 1;
  arr[i][j] = true;
}








function printArray(arr){
  result ='';
  for(i = 0; i < arr.length; i++){
    for(j = 0; j <arr[i].length; j++){
      if(arr[i][j] === true) {
        result+='* ';
      } else {
        result += '  ';
      }
    } result +='\n'
  }console.log(result);
}
printArray(arr);





