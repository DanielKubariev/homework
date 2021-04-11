var findMaxElIndex = require('./4');

describe('findMaxElIndex', function(){
  it('should be defined', function(){
    expect(findMaxElIndex).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof findMaxElIndex).toBe('function');
  })
  it('should not be without arguments', function(){
    expect(findMaxElIndex()).toBe('Введите все входные данные');
  })
  it(`should return 0`, function(){
    expect(findMaxElIndex([-1,-2,-3,-4])).toStrictEqual(0);
  })
  it(`should not return 1`, function(){
    expect(findMaxElIndex([-1,-2,-3,-4])).not.toBe(1);
  })
})