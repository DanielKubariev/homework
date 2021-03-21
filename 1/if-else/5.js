//Написать программу определения оценки студента по его рейтингу, на основе следующих правил
// 0-19	F 20-39	E 40-59	D 60-74	C 75-89	B 90-100	A

var rating = 10;

if (rating >= 0 && rating <= 19) {
    console.log('F');
}
else if (rating >= 20 && rating <= 39) {
    console.log('E');
}
else if (rating >= 40 && rating <= 59) {
    console.log('D');
}
else if (rating >= 60 && rating <= 74) {
    console.log('C');
}
else if (rating >= 75 && rating <= 89) {
    console.log('B');
}
else if (rating >= 90 && rating <= 100) {
    console.log('A');
} else {
    console.log('incorrect data');
}