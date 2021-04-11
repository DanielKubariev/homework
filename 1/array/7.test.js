var findSumOfOddEl = require('./7');

describe('findSumOfOddEl', function(){
  it('should be defined', function(){
    expect(findSumOfOddEl).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof findSumOfOddEl).toBe('function');
  })
  it('should not be without arguments', function(){
    expect(findSumOfOddEl()).toBe('Введите все входные данные');
  })
  it(`should return 3`, function(){
    expect(findSumOfOddEl([1,1,2,2,1])).toStrictEqual(3);
  })
  it(`should not return 4`, function(){
    expect(findSumOfOddEl([1,1,2,2,1])).not.toBe(4);
  })
})