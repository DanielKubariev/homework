var getBinar = require('./3.1');

describe('getBinar', function(){
  it('should be defined', function(){
    expect(getBinar).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof getBinar).toBe('function');
  })
  it('should not be without arguments', function(){
    expect(getBinar()).toBe('Введите все входные данные');
  })
  it(`should return 5`, function(){
    expect(getBinar(25)).toStrictEqual(5);
  })
  it(`should return 5`, function(){
    expect(getBinar(26)).toStrictEqual(5);
  })
  it(`should return 5`, function(){
    expect(getBinar(26)).not.toBe(6);
  })
})