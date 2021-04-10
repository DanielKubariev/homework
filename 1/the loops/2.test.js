var getProstoeNum = require('./2');

describe('calculate', function(){
  it('should be defined', function(){
    expect(getProstoeNum).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof getProstoeNum).toBe('function');
  })
  it('should not be without arguments', function(){
    expect(getProstoeNum()).toBe('Введите все входные данные');
  })
  it(`should return 'простое число'`, function(){
    expect(getProstoeNum(1)).toBe(`простое число`);
  })
  it(`should not return 'не простое число'`, function(){
    expect(getProstoeNum(1)).not.toBe(`не простое число`);
  })
  it(`should return 'простое число'`, function(){
    expect(getProstoeNum(2)).toBe(`простое число`);
  })
  it(`should not return 'не простое число'`, function(){
    expect(getProstoeNum(2)).not.toBe(`не простое число`);
  })
  it(`should return 'простое число'`, function(){
    expect(getProstoeNum(2)).toBe(`простое число`);
  })
  it(`should not return 'не простое число'`, function(){
    expect(getProstoeNum(2)).not.toBe(`не простое число`);
  })
  it(`should return 'не простое число'`, function(){
    expect(getProstoeNum(-2)).toBe(`не простое число`);
  })
  it(`should not return 'простое число'`, function(){
    expect(getProstoeNum(-2)).not.toBe(`простое число`);
  })
  it(`should return 'не простое число'`, function(){
    expect(getProstoeNum(1.1)).toBe(`не простое число`);
  })
  it(`should not return 'простое число'`, function(){
    expect(getProstoeNum(1.1)).not.toBe(`простое число`);
  })
  it(`should return 'простое число'`, function(){
    expect(getProstoeNum(11)).toBe(`простое число`);
  })
  it(`should not return 'не простое число'`, function(){
    expect(getProstoeNum(11)).not.toBe(`не простое число`);
  })
})
