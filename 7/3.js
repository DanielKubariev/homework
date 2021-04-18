// Создайте функцию, которая получает два аргумента: первый - это массив объектов, второй - строка (имя автора). 
// Ваша функция должна возвращать количество сообщений с автором из аргумента функции и комментариев с тем же автором. Пример массива: 
let listOfPosts2 = [
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

function getQuantityPostsByAuthor (array,author) {
  var someObj ={
    posts: 0,
    comments: 0
  }
	for(var i = 0; i < array.length; i++){
		if(array[i].author === author){
			someObj.posts++;
		}
		if(array[i].hasOwnProperty('comments')){
			for(var j = 0; j < array[i].comments.length; j++){
				if(array[i].comments[j].author === author){
					someObj.comments++;
				}
			}
		}
	
	}
	return someObj;
}
var result = getQuantityPostsByAuthor(listOfPosts2,'Rimus');
console.log(`post - ${result.posts}, comments - ${result.comments}`);
