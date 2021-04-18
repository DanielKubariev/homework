var cachedFunc = require('./4');
describe('cachedFunc', function(){
  it('should be defined', function(){
    expect(cachedFunc).toBeDefined();
  });
  it('should be function', function(){
    expect(typeof cachedFunc).toBe('function');
  });
  it('should not be without arguments', function(){
    expect(cachedFunc()).toBe('Введите все входные данные');
  });
  it(`should return 'foobar'`, function(){
    expect(cachedFunc('foo', 'bar')).toBe('foobar' );
  });
  //есть вопросы с тем как тут тестировать повторный вызов функции !? 
});