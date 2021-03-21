var arr = [];
var n = 7
for(var i = 0; i < n; i++) {
  arr.push([]);
  for(var j = 0; j < n; j++) {
    arr[i].push(false);
  }
}

for(var i = 0; i < n; i++ ) {
  for(var j = 0; j < n; j++) {
    arr[i][j] = true;
  }
}
  
for(var j = 0; j < n; j++) {
  arr[0][j] = false;
}

for(var i = 0; i < n; i++) {
  arr [i][0] = false;
}
for(var i = 0; i < n; i++) {
  for(var j = 0; j < n; j++) {
    arr[i][j] = false;
  }
}
for(var i = 0; i < n; i++) {
  arr[i][i] = true;
}

for(var i = 0; i < n; i++) {
  var j = n-i-1
  arr[i][j] = true
} 




/* 1
f f f
t t t
t t t
2
f f f
f t t
f t t
3
f f f
f f f
f f f
4
t f f
f t f
f f t
5
t f t
f t f
t f t
*/
printArray(arr);

function printArray(array) { 
  var result ='';
  for(var i = 0; i < array.length; i++) {
    for(var j = 0; j < array[i].length; j++) {
      if(array[i][j] === true) {
        result += '* ';
      } else {
        result += '  ';
      }
    }
    result += '\n';
  }
 console.log(result);
}



