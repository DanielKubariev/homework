var findMaxEl = require('./2');

describe('findMaxEl', function(){
  it('should be defined', function(){
    expect(findMaxEl).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof findMaxEl).toBe('function');
  })
  it('should not be without arguments', function(){
    expect(findMaxEl()).toBe('Введите все входные данные');
  })
  it(`should return -1`, function(){
    expect(findMaxEl([-1,-2,-3,-4])).toStrictEqual(-1);
  })
  it(`should not return -4`, function(){
    expect(findMaxEl([-1,-2,-3,-4])).not.toBe(-4);
  })
})