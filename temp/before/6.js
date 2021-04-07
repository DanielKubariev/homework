// дано: Длины 3х сторон.
// вопрос: можно ли построить треугольник с этими сторонами
// две меньшие стороны строго больше длинны самой большой стороны
function buildTriangle(a,b,c){
	if (a >= c+b || b >= a+c || c >= b+a){
    return 'cannot build triangle';
	}
	return 'can build triangle';
}
console.log(buildTriangle(3,2,4));
