var createMatrix = require('./сreate-matrix');
var printMatrix = require('./print-matrix'); 
var fillSideDiagonal = require('./fill-side-diagonal');
var fillMainDiagonal = require('./fill-main-diagonal');
var arr = createMatrix(7,7); 

fillMainDiagonal(arr);
fillSideDiagonal(arr);

printMatrix(arr);