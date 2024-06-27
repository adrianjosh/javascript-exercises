const getTheTitles = require('./getTheTitles')

describe('getTheTitles', () => {
    const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      },
      {
        title: 'Book3',
        author: 'Name3'
      },
      {
        title: 'Book4',
        author: 'Name4'
      }
    ]

  test('gets titles', () => {
    expect(getTheTitles(books)).toEqual(['Book','Book2','Book3','Book4']);
  });
});
