var mirror = require('./6');

describe('mirror', function(){
  it('should be defined', function(){
    expect(mirror).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof mirror).toBe('function');
  })
  it('should not be without arguments', function(){
    expect(mirror()).toBe('Введите все входные данные');
  })
  it(`should return 123`, function(){
    expect(mirror(321)).toStrictEqual(123);
  })
  it(`should not return any expect 123`, function(){
    expect(mirror(321)).not.toBe(321);
  })
})