var calcSumOfOddIndexEl = require('./5');

describe('calcSumOfOddIndexEl', function(){
  it('should be defined', function(){
    expect(calcSumOfOddIndexEl).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof calcSumOfOddIndexEl).toBe('function');
  })
  it('should not be without arguments', function(){
    expect(calcSumOfOddIndexEl()).toBe('Введите все входные данные');
  })
  it(`should return 3`, function(){
    expect(calcSumOfOddIndexEl([2,1,2,1,2,1])).toStrictEqual(3);
  })
  it(`should not return 6`, function(){
    expect(calcSumOfOddIndexEl([2,1,2,1,2,1])).not.toBe(6);
  })
})