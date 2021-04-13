function sum(a, b) {
  var table = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    [2, 3, 4, 5, 6, 7, 8, 9, 0, 1],
    [3, 4, 5, 6, 7, 8, 9, 0, 1, 2],
    [4, 5, 6, 7, 8, 9, 0, 1, 2, 3],
    [5, 6, 7, 8, 9, 0, 1, 2, 3, 4],
    [6, 7, 8, 9, 0, 1, 2, 3, 4, 5],
    [7, 8, 9, 0, 1, 2, 3, 4, 5, 6],
    [8, 9, 0, 1, 2, 3, 4, 5, 6, 7],
    [9, 0, 1, 2, 3, 4, 5, 6, 7, 8]
  ]
  
  var table2 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]

  if(a.length < b.length) {
    var c = a;
    a = b;
    b = c;
  } 
  while(b.length < a.length) {
    b = '0' + b;
  }

  a = a.split('').reverse();
  b = b.split('').reverse();

  var perenos = 0, tempPerenos = 0, tempResult = 0, result = '';

  a.forEach(function(item, i) { 
    tempResult = table[Number(a[i])][Number(b[i])];
    tempPerenos = perenos; 
    perenos = table[table2[Number(a[i])][Number(b[i])]][table2[tempResult][perenos]];
    tempResult = table[tempResult][tempPerenos];
    result = tempResult.toString() + result;
  });
  if(perenos !== 0){
    result = perenos.toString() + result;
  }
  return result;
}

console.log(sum('999','999'));

// 123 123
//321 321 = 2 4 6
