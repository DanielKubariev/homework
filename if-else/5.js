//Написать программу определения оценки студента по его рейтингу, на основе следующих правил
// 0-19	F 20-39	E 40-59	D 60-74	C 75-89	B 90-100	A

let rating = 100

if (rating >= 0 && rating <= 19) {
    console.log('F');
}
if (rating >= 20 && rating <= 39) {
    console.log('E');
}
if (rating >= 40 && rating <= 59) {
    console.log('D');
}
if (rating >= 60 && rating <= 74) {
    console.log('C');
}
if (rating >= 75 && rating <= 89) {
    console.log('B');
}
if (rating >= 90 && rating <= 100) {
    console.log('A');
} else if (rating < 0 || rating > 100) {
    console.log('incorrect data');
}