var getQuantityPostsByAuthor = require('./3');
describe('getQuantityPostsByAuthor', function(){
  it('should be defined', function(){
    expect(getQuantityPostsByAuthor).toBeDefined();
  });
  it('should be function', function(){
    expect(typeof getQuantityPostsByAuthor).toBe('function');
  });
  it('should not be without arguments', function(){
    expect(getQuantityPostsByAuthor()).toBe('Введите все входные данные');
  });
  it(`should return { posts: 1, comments: 3 }`, function(){
    var listOfPosts2 = [
      {
          id: 1,
          post: 'some post1',
          title: 'title 1',
          author: 'Ivanov',
          comments: [
              {
                  id: 1.1,
                  comment: 'some comment1',
                  title: 'title 1',
                  author: 'Rimus'
              },
              {
                  id: 1.2,
                  comment: 'some comment2',
                  title: 'title 2',
                  author: 'Uncle'
              }
          ]
      },
      {
          id: 2,
          post: 'some post2',
          title: 'title 2',
          author: 'Ivanov',
          comments: [
              {
                  id: 1.1,
                  comment: 'some comment1',
                  title: 'title 1',
                  author: 'Rimus'
              },
              {
                  id: 1.2,
                  comment: 'some comment2',
                  title: 'title 2',
                  author: 'Uncle'
              },
              {
                  id: 1.3,
                  comment: 'some comment3',
                  title: 'title 3',
                  author: 'Rimus'
              }
          ]
      },
      {
          id: 3,
          post: 'some post3',
          title: 'title 3',
          author: 'Rimus'
      },
      {
          id: 4,
          post: 'some post4',
          title: 'title 4',
          author: 'Uncle'
      }
]
    expect(getQuantityPostsByAuthor(listOfPosts2,'Rimus')).toEqual({ posts: 1, comments: 3 });
  });
  it(`should return 'Введите верные данные'`, function(){
    expect(getQuantityPostsByAuthor('Rimus',{author: 1})).toBe('Введите верные данные');
  });
})