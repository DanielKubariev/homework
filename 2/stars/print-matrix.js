module.exports = function(matrix){
  var result = '';
  for(var i = 0; i < matrix.length; i++){
    for(var j =0; j < matrix[i].length; j++){
      if(matrix[i][j] === true){
        result += '* ';
      } else {
        result += '  ';
      }
    } 
    result += '\n';
  }
  console.log(result);
}