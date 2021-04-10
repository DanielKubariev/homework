var findSumOfEven = require('./1');

describe('calculate', function(){
  it('should be defined', function(){
    expect(findSumOfEven).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof findSumOfEven).toBe('function');
  })
  it('should not be without arguments', function(){
    expect(findSumOfEven()).toBe('Введите все входные данные');
  })
  it('should return quantity = 49, sum = 2450', function(){
    expect(findSumOfEven(1,99)).toStrictEqual([ 49, 2450 ]);
  })
  it('should return quantity = 50, sum = 7450', function(){
    expect(findSumOfEven(100,200)).toStrictEqual([ 50, 7450 ]);
  })
  it('should return quantity = 50, sum = -7550', function(){
  expect(findSumOfEven(-200,-100)).toStrictEqual([ 50, -7550 ]);
  })

})
