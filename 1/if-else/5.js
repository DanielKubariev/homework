//Написать программу определения оценки студента по его рейтингу, на основе следующих правил
// 0-19	F 20-39	E 40-59	D 60-74	C 75-89	B 90-100	A

function findMark(r){
	if(r === undefined){
    return 'Введите все входные данные';
  }
	if (r >= 0 && r <= 19) {
    return 'F';
}
	if (r >= 20 && r <= 39) {
    return 'E';
}
	if (r >= 40 && r <= 59) {
		return 'D';
}
	if (r >= 60 && r <= 74) {
		return 'C';
}
	if (r >= 75 && r <= 89) {
		return 'B';
}
	if (r >= 90 && r <= 100) {
		return 'A';
} 
	return 'Incorrect data';
}

console.log(findMark(90));
module.exports = findMark;