var reverseArr = require('./6');

describe('reverseArr', function(){
  it('should be defined', function(){
    expect(reverseArr).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof reverseArr).toBe('function');
  })
  it('should not be without arguments', function(){
    expect(reverseArr()).toBe('Введите все входные данные');
  })
  it(`should return 3`, function(){
    expect(reverseArr([1,2,3,4])).toStrictEqual([4,3,2,1]);
  })
})