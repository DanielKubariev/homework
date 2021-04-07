var  sumOrMul = require('./1');

describe('testSum', function(){
  it('should be defined', function(){
    expect(sumOrMul).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof sumOrMul).toBe('function');
  })
  it('should not be without arguments', function(){
    expect(sumOrMul()).toBe(false);
  })
  it('should return a+b', function(){
    expect(sumOrMul(5,5)). toBe(10);
  })
  it('should multiply a*b', function(){
    expect(sumOrMul(2,5)).toBe(10);
  })
})