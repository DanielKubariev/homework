var createMatrix = require('./сreate-matrix');
var printMatrix = require('./print-matrix'); 
var fillRow = require('./fill-row'); 
var fillColumn = require('./fill-column');//подключение необходимого
var fillSideDiagonal = require('./fill-side-diagonal');
var arr = createMatrix(7,7); 

fillRow(arr,arr.length-1);
fillColumn(arr,arr.length-1);
fillSideDiagonal(arr);

printMatrix(arr);