var cache = require('./4');

describe('cachedFunc', function(){
  it('should be defined', function(){
    expect(cache).toBeDefined();
  });
  it('should be function', function(){
    expect(typeof cache).toBe('function');
  });
  it('result should be function', function(){
    expect(typeof cache()).toBe('function');
  });
  it('callback should be called once', function() {
    var funcMock = jest.fn();
    var cachedFunc = cache(funcMock);
    cachedFunc(1, 1)
    cachedFunc(1, 1)

    expect(funcMock).toBeCalledTimes(1);
  });
  it('callback should be called twice', function() {
    var funcMock = jest.fn();
    var cachedFunc = cache(funcMock);
    cachedFunc(1, 1)
    cachedFunc('a', 1)
    cachedFunc(1, 1)
    cachedFunc('a', 1)
    cachedFunc('a', 1)

    expect(funcMock).toBeCalledTimes(2);
  });
});