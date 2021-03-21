module.exports = function(matrix,index,value = true){
for(i = 0; i < matrix.length; i++){
  matrix[i][index] = value;
  }
}