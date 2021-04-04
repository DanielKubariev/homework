var arr = [];
var n = 7;
for(var i = 0; i < n; i++){
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

console.log(arr);