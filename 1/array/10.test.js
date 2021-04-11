var selectionSort = require('./10');

describe('selectionSort', function(){
  it('should be defined', function(){
    expect(selectionSort).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof selectionSort).toBe('function');
  })
  it('should not be without arguments', function(){
    expect(selectionSort()).toBe('Введите все входные данные');
  })
  it(`should return [1,2,3,4,5]`, function(){
    expect(selectionSort([5,4,3,2,1])).toStrictEqual([1,2,3,4,5] );
  })
  it(`should not return [5,4,3,2,1]`, function(){
    expect(selectionSort([5,4,3,2,1])).not.toBe([5,4,3,2,1]);
  })
})