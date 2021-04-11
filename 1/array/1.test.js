var findMinEl = require('./1');

describe('findMinEl', function(){
  it('should be defined', function(){
    expect(findMinEl).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof findMinEl).toBe('function');
  })
  it('should not be without arguments', function(){
    expect(findMinEl()).toBe('Введите все входные данные');
  })
  it(`should return -4`, function(){
    expect(findMinEl([-1,-2,-3,-4])).toStrictEqual(-4);
  })
  it(`should not return -1`, function(){
    expect(findMinEl([-1,-2,-3,-4])).not.toBe(-1);
  })
})