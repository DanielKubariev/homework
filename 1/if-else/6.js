// дано: Длины 3х сторон.
// вопрос: можно ли построить треугольник с этими сторонами
// две меньшие стороны строго больше длинны самой большой стороны
let [a,b,c] = [10,5,5]
if (a > b && a > c) { 
        console.log('A the biggest') 
    if (a >= b + c) {
        console.log('can not build a triangle')
    } else {
        console.log('can build a triangle')
    }
}
else if (b > a && b > c) {
    console.log('B the biggest')
    if (b >= a + c) {
        console.log('can not build a triangle')
    } else {
        console.log('can build a triangle')
    }
}
else if (c > b && c > a){
    console.log('C the biggest') 
    if (c >= b + a) {
        console.log('can not build a triangle')
    }    else {
        console.log('can build a triangle')
    } 
} else {
    console.log('can build')
}


