//3.	Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)
function getPodbor (num) {
    for (i = 1;; i++ )
    {   
        var q = i*i;
        if (num === q) {
            console.log(i); break;
        } 
        if(num < q) {
            console.log(i - 1); break;
        } 
    } 
}
function getBinar (num) {
        var b = 1;
    while (true) {
        var i = (b + num / b) / 2;
        if  (i === b) break;
        b = i;
    }
    console.log(Math.round(b));
}

getBinar(25)


