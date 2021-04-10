var findFactorial = require('./4');

describe('findFactorial', function(){
  it('should be defined', function(){
    expect(findFactorial).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof findFactorial).toBe('function');
  })
  it('should not be without arguments', function(){
    expect(findFactorial()).toBe('Введите все входные данные');
  })
  it(`should return 6`, function(){
    expect(findFactorial(3)).toStrictEqual(6);
  })
  it(`should not return any expect 6`, function(){
    expect(findFactorial(3)).not.toBe(3);
  })
})