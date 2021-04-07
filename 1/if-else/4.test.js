var calculate = require('./4');

describe('calculate', function(){

  it('should be defined', function(){
    expect(calculate).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof calculate).toBe('function');
  })
  it('should not be without arguments', function(){
    expect(calculate()).toBe('Введите все входные данные');
  })
  it('should return sum of a,b,c', function(){
    expect(calculate(1,1,1)).toBe(6);
  })
  it('should return sum of a,b,c', function(){
    expect(calculate(-2,1,1)).toBe(3);
  })
  it('should return sum of a,b,c', function(){
    expect(calculate(0,0,0)).toBe(3);
  })
  it('should return mult of a,b,c', function(){
    expect(calculate(2,2,2)).toBe(11);
  })
  it('should return mult of a,b,c', function(){
    expect(calculate(-2,-2,2)).toBe(11);
  })
  it('should return mult of a,b,c', function(){
    expect(calculate(-2,2,-2)).toBe(11);
  })
  it('should return mult of a,b,c', function(){
    expect(calculate(2,-2,-2)).toBe(11);
  })
})