var findSumOfNumberEl = require('./5');

describe('findSumOfNumberEl', function(){
  it('should be defined', function(){
    expect(findSumOfNumberEl).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof findSumOfNumberEl).toBe('function');
  })
  it('should not be without arguments', function(){
    expect(findSumOfNumberEl()).toBe('Введите все входные данные');
  })
  it(`should return 6`, function(){
    expect(findSumOfNumberEl(321)).toStrictEqual(6);
  })
  it(`should not return any except 6 `, function(){
    expect(findSumOfNumberEl(321)).not.toBe(321);
  })
})