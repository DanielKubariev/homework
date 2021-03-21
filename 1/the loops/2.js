//2.	Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
var n = 2;
var prostoe = true;
if (n <= 0 || n % 1 !== 0) {
    console.log('неверные данные');
    return;
} 
for (i = 2; i < n; i++) {
    if (n % i === 0) { 
        prostoe = false;
    } 
}
if (prostoe === true) {
    console.log('простое');
} else {
    console.log('не простое');
}
