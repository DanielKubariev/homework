var createMatrix = require('./сreate-matrix');
var printMatrix = require('./print-matrix'); 
var fillRow = require('./fill-row'); 
var fillSideDiagonal = require('./fill-side-diagonal');
var fillMainDiagonal = require('./fill-main-diagonal');
var arr = createMatrix(7,7); 

fillRow(arr,0);
fillMainDiagonal(arr,true,0,arr.length/2);
fillSideDiagonal(arr,true,0,arr.length/2);



printMatrix(arr);