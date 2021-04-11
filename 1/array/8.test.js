var switchHalfsOfArr = require('./8');

describe('switchHalfsOfArr', function(){
  it('should be defined', function(){
    expect(switchHalfsOfArr).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof switchHalfsOfArr).toBe('function');
  })
  it('should not be without arguments', function(){
    expect(switchHalfsOfArr()).toBe('Введите все входные данные');
  })
  it(`should return [ 4, 5, 6, 1, 2, 3 ]`, function(){
    expect(switchHalfsOfArr([1,2,3,4,5,6])).toStrictEqual([ 4, 5, 6, 1, 2, 3 ]);
  })
  it(`should not return [ 4, 1, 2, 5, 6, 3 ]`, function(){
    expect(switchHalfsOfArr([1,2,3,4,5,6])).not.toBe([ 4, 1, 2, 5, 6, 3 ]);
  })
})