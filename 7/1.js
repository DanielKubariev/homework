// Новый фильм "Как натренировать своего дракона” только выпустили! 
// В кассах кинотеатра много людей, стоящих в огромную очередь. У каждого из них есть банкнота в 100, 50 или 25 долларов. 
// Билет на «Бэтмен против Супермена: На заре справедливости» стоит 25 долларов. Вася в настоящее время работает клерком.
//  Он хочет продать билет каждому человеку в этой очереди. Может ли Вася продать каждому билет и отдать сдачу,
//   если у него изначально нет денег и он продает билеты строго в том порядке, в котором люди следуют в очереди? 
// 	Верните YES, если Вася может продать каждому билет и отдать сдачу. В противном случае верните NO.
// 	 Может ли Вася продать каждому билет и отдать сдачу?
// Условия:
// * принимает массив из очереди людей
// * возвращает строку
// //Примеры:
// tickets([25, 25, 50]); // => YES
// tickets([25, 100]);    // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 100]); // Yes
// tickets([25, 50, 100]); // No
// tickets([‘25’, ‘25’, ‘50’, ‘100’]); // Yes
// tickets([‘25’, ‘50’, ‘100’]); // No
function tickets(person) {
	if(person === undefined){
    return 'Введите все входные данные';
  }
	var banknote25 = 0;
			banknote50 = 0;
	for(var i = 0; i < person.length; i++){
		person[i] = Number(person[i]);
		if(person[i] === 25){
			banknote25++;
		} else if(person[i] === 50){
			if(banknote25>0){
				banknote25--;
				banknote50++;
			} else {
				return 'NO';
			}
		} else{
			if(banknote50>0 && banknote25>0){
				banknote25--;
				banknote50--;
			} else if(banknote25>2){
				banknote25-=3;
			} else{
				return 'NO';
			}
		}
	} 
	return 'YES';
}
// console.log(tickets([25, 25, 50])); // => YES
// console.log(tickets([25, 100]));    // => NO. Vasya will not have enough money to give change to 100 dollars
// console.log(tickets([25, 25, 50, 100])); // Yes
// console.log(tickets([25, 50, 100])); // No
// console.log(tickets(['25', '25', '50', '100'])); // Yes
// console.log(tickets(['25', '50', '100'])); // No

module.exports = tickets;