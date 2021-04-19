Number.prototype.isOdd = function() {
   return this % 2 !== 0 ? true : false;
}

var even = 10;
var odd = 9;

console.log(even.isOdd());
console.log(odd.isOdd());

module.exports = {
isOdd:Number.prototype.isOdd
} 