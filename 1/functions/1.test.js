var getDayName = require('./1');

describe('getDayName', function(){
  it('should be defined', function(){
    expect(getDayName).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof getDayName).toBe('function');
  })
  it('should not be without arguments', function(){
    expect(getDayName()).toBe('Введите все входные данные');
  })
  it(`should return 'Понедельник'`, function(){
    expect(getDayName(1)).toBe('Понедельник' );
  })
  it(`should return 'Введите число от 1 до 7'`, function(){
    expect(getDayName(8)).toBe('Введите число от 1 до 7' );
  })
})