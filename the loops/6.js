// Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, 
// задано число 123, вывести 321.
var a = 421;
var b, result = 0;
while (a > 0) {
    b = a % 10;
    result = result * 10 + b;
    a = parseInt (a/10);
}
console.log(result);
