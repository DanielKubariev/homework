function add(a, b)	{
	if (b == 0) return a;
	var sum = a ^ b;			
	var carry = (a & b) << 1;	
	return String(add(sum, carry));		
}
console.log(add('1231414444444444444444444444444444444444444444444444','14214244444444444444444444444444444444444444444444444444444444444444'));