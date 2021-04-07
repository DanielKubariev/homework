//3.	Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)
function getPodbor (num) {
    for (i = 1;; i++ )
    {   
        var q = i*i;
        if (num === q) {
            return (i); 
        } 
        if(num < q) {
            return(i - 1);
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
    return Math.round(b);
}

getBinar(25)


