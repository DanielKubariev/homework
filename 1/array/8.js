// Поменять местами первую и вторую половину массива, например, для массива  1 2 3 4, результат 3 4 1 2
var arr = [1,2,3,4,5,6,7,8];
var replace = [];
for(var i = parseInt((arr.length)/2); i < arr.length; i++){
  replace.push(arr[i]);
}
for(i = 0; i < parseInt(arr.length/2); i++){
  replace.push(arr[i]);
}
console.log(replace);

