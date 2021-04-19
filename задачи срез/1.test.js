var getDays = require('./1');
describe('getDays', function(){

  it('should be defined', function(){
    expect(getDays).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof getDays).toBe('function');
  })
  it('should not be without arguments', function(){
    expect(getDays()).toBe('Введите все входные данные');
  })
  it('should return 30', function(){
    expect(getDays(2021 , 4)).toBe(30)
  })
  it('should return 30', function(){
    expect(getDays(2021 , 'April')).toBe(30)
  })
  it('should return 29', function(){
    expect(getDays(2020 , 'February')).toBe(29)
  })
  it('should not return 28', function(){
    expect(getDays(2020 , 'February')).not.toBe(28)
  })
  it('should  return 28', function(){
    expect(getDays(1900 , 'February')).toBe(28)
  })
  it('should  not return 29', function(){
    expect(getDays(1700 , 'February')).not.toBe(29)
  })
  it('should  not return 29', function(){
    expect(getDays(8, 'February')).toBe(29)
  })
  it('should   return 28', function(){
    expect(getDays(9, 'February')).toBe(28)
  })
})