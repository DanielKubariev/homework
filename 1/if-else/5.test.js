var findMark = require('./5');

describe('calculate', function(){

  it('should be defined', function(){
    expect(findMark).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof findMark).toBe('function');
  })
  it('should not be without arguments', function(){
    expect(findMark()).toBe('Введите все входные данные');
  })
  it('should return F', function(){
    expect(findMark(0)).toBe('F')
  })
  it('should return E', function(){
    expect(findMark(20)).toBe('E')
  })
  it('should return D', function(){
    expect(findMark(40)).toBe('D')
  })
  it('should return C', function(){
    expect(findMark(60)).toBe('C')
  })
  it('should return B', function(){
    expect(findMark(75)).toBe('B')
  })
  it('should return A', function(){
    expect(findMark(90)).toBe('A')
  })
  it('should return Incorrect data', function(){
    expect(findMark(-1)).toBe('Incorrect data')
  })
  it('should return Incorrect data', function(){
    expect(findMark(101)).toBe('Incorrect data')
  })
})