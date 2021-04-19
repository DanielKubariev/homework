var {isOdd} = require('./2')
describe('isOdd', function(){
  var even = 10;
  var odd = 9;
  it('should be defined', function(){
    expect(isOdd).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof isOdd).toBe('function');
  })
  it('should return true', function(){
    expect(odd.isOdd()).toBe(true);
  })
  it('should return false', function(){
    expect(even.isOdd()).toBe(false);
  })
  it('should not return false', function(){
    expect(odd.isOdd()).not.toBe(false);
  })
  it('should not return true', function(){
    expect(even.isOdd()).not.toBe(true);
  })
})
