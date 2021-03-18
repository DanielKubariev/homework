//5.	Посчитать сумму цифр заданного числа

var a = 999;
var result = 0;
if (a < 0)
    a = a * (-1);
while (a !== 0)  {
    result += a % 10;
    a = (a - a % 10) / 10;
}
console.log(result);



