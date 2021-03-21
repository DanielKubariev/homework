module.exports = function(matrix,index,value = true){
  for(j = 0; j < matrix[index].length; j++) {
    matrix[index][j] = value;
  }
}