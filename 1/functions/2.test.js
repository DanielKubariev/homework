var findDistance = require('./2');

describe('findDistance', function(){
  it('should be defined', function(){
    expect(findDistance).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof findDistance).toBe('function');
  })
  it('should not be without arguments', function(){
    expect(findDistance()).toBe('Введите все входные данные');
  })
  it(`should return 7`, function(){
    expect(findDistance(1,2,8,2)).toBe(7);
  })
  it(`should not return 'Введите число!'`, function(){
    expect(findDistance(1,2,8,2)).not.toBe('Введите число!');
  })
})