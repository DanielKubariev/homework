var getPodbor = require('./3');

describe('getPodbor', function(){
  it('should be defined', function(){
    expect(getPodbor).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof getPodbor).toBe('function');
  })
  it('should not be without arguments', function(){
    expect(getPodbor()).toBe('Введите все входные данные');
  })
  it(`should return 5`, function(){
    expect(getPodbor(25)).toStrictEqual(5);
  })
  it(`should return 5`, function(){
    expect(getPodbor(26)).toStrictEqual(5);
  })
  it(`should return 5`, function(){
    expect(getPodbor(26)).not.toBe(6);
  })
})