// 4.Напишите функцию кеш
function complexFunction(arg1,arg2) {
	return arg1+arg2;
}
function cache(func){
  var array = [];
  return function(arg1,arg2){
    for(var i = 0; i < array.length; i++){
      if(array[i].first === arg1 && array[i].second === arg2){
        return array[i].result;
      }
    }
    console.log('NEW EXECUTION OF FUNC');
    array.push({
      first: arg1,
      second: arg2,
      result: func(arg1,arg2)
    });
    return func(arg1,arg2); 
  }
}

var cachedFunc = cache(complexFunction);



console.log(cachedFunc('foo', 'bar')); // complexFunction должна выполнится
console.log(cachedFunc('foo', 'bar'));// complexFunction не должна выполняться  				// снова,должен вернуться кеш
console.log(cachedFunc('foo', 'baz')); // complexFunction должна выполнится
