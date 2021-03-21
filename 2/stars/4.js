var createMatrix = require('./сreate-matrix');
var printMatrix = require('./print-matrix'); 
var fillRow = require('./fill-row'); 
var fillColumn = require('./fill-column');//подключение необходимого
var fillMainDiagonal = require('./fill-main-diagonal');
var arr = createMatrix(7,7); 

fillRow(arr,arr.length-1);
fillColumn(arr,0);
fillMainDiagonal(arr);

printMatrix(arr);