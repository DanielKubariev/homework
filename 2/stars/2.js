var createMatrix = require('./сreate-matrix');
var printMatrix = require('./print-matrix'); 
var fillRow = require('./fill-row'); 
var fillColumn = require('./fill-column');

var arr = createMatrix(8,7); 

fillRow(arr,0);
fillRow(arr,arr.length-1);
fillColumn(arr,0);
fillColumn(arr,arr.length-1);

printMatrix(arr);