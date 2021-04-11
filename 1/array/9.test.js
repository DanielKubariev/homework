var bubbleSort = require('./9');

describe('bubbleSort', function(){
  it('should be defined', function(){
    expect(bubbleSort).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof bubbleSort).toBe('function');
  })
  it('should not be without arguments', function(){
    expect(bubbleSort()).toBe('Введите все входные данные');
  })
  it(`should return [1,2,3,4,5]`, function(){
    expect(bubbleSort([5,4,3,2,1])).toStrictEqual([1,2,3,4,5] );
  })
  it(`should not return [5,4,3,2,1]`, function(){
    expect(bubbleSort([5,4,3,2,1])).not.toBe([5,4,3,2,1]);
  })
})