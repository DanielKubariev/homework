var createMatrix = require('./сreate-matrix');
var printMatrix = require('./print-matrix'); 
var fillRow = require('./fill-row'); 
var fillSideDiagonal = require('./fill-side-diagonal');
var fillMainDiagonal = require('./fill-main-diagonal');
var arr = createMatrix(7,7); 

fillRow(arr,arr.length-1);
fillMainDiagonal(arr,true,arr.length/2,arr.length);
fillSideDiagonal(arr,true,arr.length/2,arr.length);



printMatrix(arr);