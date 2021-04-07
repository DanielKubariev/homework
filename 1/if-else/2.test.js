var getDot = require('./2');

describe('getDot', function(){
  it('should be defined', function(){
    expect(getDot).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof getDot).toBe('function');
  })
  it('should not be without arguments', function(){
    expect(getDot()).toBe('Введите входные данные');
  })
  it(`should return 'Первая четверть'`,function(){
    expect(getDot(1,1)).toBe('Первая четверть');
  })
  it(`should return 'Вторая четверть'`,function(){
    expect(getDot(-1,1)).toBe('Вторая четверть');
  })
  it(`should return 'Третья четверть'`,function(){
    expect(getDot(-1,-1)).toBe('Третья четверть');
  })
  it(`should return 'Четвертая четверть'`,function(){
    expect(getDot(1,-1)).toBe('Четвертая четверть');
  })
  it(`should return 'Точка лежит на осях'`,function(){
    expect(getDot(0,0)).toBe('Точка лежит на осях');
  })
  it(`should return 'Точка лежит на осях'`,function(){
    expect(getDot(0,-1)).toBe('Точка лежит на осях');
  })
  it(`should return 'Точка лежит на осях'`,function(){
    expect(getDot(1,0)).toBe('Точка лежит на осях');
  })


  
})