// 4. Принимая строку, ваша функция должна вернуть обьект, в котором ключи – символы строки, значение – количество повторений символов в строке
// function countCharacters(string) {
// let result;
// //Your code here
// return result;
// }
// countCharacters(‘sparrow’) // should return {s: 1, p: 1, a: 1, r: 2, o: 1, w: 1}
// countCharacters(‘aabcddeffge’) // should return {a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1}
// countCharacters(‘a 2ab !d’) // should return {a: 2, b:1, d:1, 2:1} //charCodeAt >= 65 <=90

function countCharacters(str){
	var obj = {};
	for(var i = 0; i < str.length; i++){
		if(obj.hasOwnProperty(str[i])){
			obj[str[i]]++;
		} else if(str[i].toUpperCase().charCodeAt(0) >= 65 && str[i].toUpperCase().charCodeAt(0) <= 90){
			obj[str[i]] = 1;
		}
	}
	 return obj;
}
console.log(countCharacters('a 2ab !d'));