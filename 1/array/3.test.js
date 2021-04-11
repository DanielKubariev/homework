var findMinElIndex = require('./3');

describe('findMinElIndex', function(){
  it('should be defined', function(){
    expect(findMinElIndex).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof findMinElIndex).toBe('function');
  })
  it('should not be without arguments', function(){
    expect(findMinElIndex()).toBe('Введите все входные данные');
  })
  it(`should return 3`, function(){
    expect(findMinElIndex([-1,-2,-3,-4])).toStrictEqual(3);
  })
  it(`should not return 4`, function(){
    expect(findMinElIndex([-1,-2,-3,-4])).not.toBe(4);
  })
})