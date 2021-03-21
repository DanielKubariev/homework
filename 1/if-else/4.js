//	Посчитать выражение (макс(а*б*с, а+б+с))+3

var [a,b,c] = [1,1,1];

if (a*b*c > a+b+c) {
    console.log(a*b*c + 3);
} else { 
    console.log(a+b+c +3);
}

