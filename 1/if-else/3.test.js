var sumOfPositive = require('./3');

describe('sumOfPositive', function(){

  it('should be defined', function(){
    expect(sumOfPositive).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof sumOfPositive).toBe('function');
  })
  it('should not be without arguments', function(){
    expect(sumOfPositive()).toBe('Введите все входные данные');
  })
  it('should return sum of a,b,c', function(){
    expect(sumOfPositive(1,1,1)).toBe(3);
  })
  it('should return sum of a,b,c', function(){
    expect(sumOfPositive(-2,1,1)).toBe(2);
  })
  it('should return sum of a,b,c', function(){
    expect(sumOfPositive(1,-2,1)).toBe(2);
  })
  it('should return sum of a,b,c', function(){
    expect(sumOfPositive(1,1,-2)).toBe(2);
  })
  it('should return null', function(){
    expect(sumOfPositive(0,0,0)).toBe(null);
  })
})