var sum = require('./2');
describe('sum', function(){
  it('should be defined', function(){
    expect(sum).toBeDefined();
  });
  it('should be function', function(){
    expect(typeof sum).toBe('function');
  });
  it('should not be without arguments', function(){
    expect(sum()).toBe('Введите все входные данные');
  });
  it(`should return '222'`, function(){
    expect(sum('111','111')).toBe('222' );
  });
  it(`should return '19999999998'`, function(){
    expect(sum('9999999999','9999999999')).toBe('19999999998' );
  });
  it(`should return 'Неверные данные'`, function(){
    expect(sum(111,111)).toBe('Неверные данные');
  });
  it(`should return 'Неверные данные'`, function(){
    expect(sum('111',111)).toBe('Неверные данные');
  });
  it(`should return 'Неверные данные'`, function(){
    expect(sum(111,'111')).toBe('Неверные данные');
  });
})