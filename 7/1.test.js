var tickets = require('./1');
describe('tickets', function(){
  it('should be defined', function(){
    expect(tickets).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof tickets).toBe('function');
  })
  it('should not be without arguments', function(){
    expect(tickets()).toBe('Введите все входные данные');
  })
  it(`should return 'YES'`, function(){
    expect(tickets([25, 25, 50])).toBe('YES' );
  })
  it(`should not return 'NO'`, function(){
    expect(tickets([25, 25, 50])).not.toBe('NO' );
  })
  it(`should return 'NO'`, function(){
    expect(tickets([50, 25])).toBe('NO' );
  })
  it(`should not return 'YES'`, function(){
    expect(tickets([50, 25])).not.toBe('YES' );
  })
  it(`should return 'NO'`, function(){
    expect(tickets([100, 50, 25])).toBe('NO' );
  })
  it(`should not return 'YES'`, function(){
    expect(tickets([100, 50, 25])).not.toBe('YES' );
  })
})