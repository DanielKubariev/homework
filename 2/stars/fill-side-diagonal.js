module.exports = function(matrix,value = true, from = 0, to = matrix.length){
  for(var i = parseInt(from); i < to; i++){
    var index = matrix.length - i - 1
    matrix[i][index] = value;
    }
  }