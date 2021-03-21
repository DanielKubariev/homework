module.exports = function(n,m,value = false){
  var arr = [];
  for(var i = 0; i < n; i++){
    arr.push([]);
    for(var j = 0; j < m; j++){
      arr[i].push(value);
    }
  }
  return arr;
}