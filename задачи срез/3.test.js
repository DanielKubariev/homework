var {
  checkEven,
  every
} = require('./3')

describe('checkEven', function(){

  it('should be defined', function(){
    expect(checkEven).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof checkEven).toBe('function');
  })
  it('should return true', function(){
    expect(checkEven(4)).toBe(true)
  })
  it('should return false', function(){
    expect(checkEven(3)).toBe(false)
  })
})

describe('every', function(){

  it('should be defined', function(){
    expect(every).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof every).toBe('function');
  })
  it('should return true', function(){
    expect(every([8, 2, 4],checkEven)).toBe(true)
  })
  it('should return false', function(){
    expect(every([8, 2, 4],checkEven)).not.toBe(false)
  })
  it('should return false', function(){
    expect(every([8, 1, 4],checkEven)).toBe(false)
  })
  it('should not return true', function(){
    expect(every([8, 1, 4],checkEven)).not.toBe(true)
  })
})