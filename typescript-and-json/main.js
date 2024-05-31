'use strict';
const books = [
  {
    isbn: '978-3-16-148410-0',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  },
  {
    isbn: ' 978-0060850524',
    title: 'Brave New World',
    author: 'Aldous Huxley',
  },
  { isbn: '9780140177398', title: 'Of Mice and Men', author: 'John Steinbeck' },
];
console.log('Array of Books:', books);
console.log('typeof array of books:', typeof books);
const json = JSON.stringify(books);
console.log('json string:', json);
console.log('json string typeof:', typeof json);
const studentJSON = '{"numberID": "12345", "name": "Katelyn Ngo"}';
console.log('studentJSON string:', studentJSON);
console.log('studentJSON string typeof"', typeof studentJSON);
const studentObject = JSON.parse(studentJSON);
console.log('parse student object:', studentObject);
console.log('parse student object typeof:', typeof studentObject);
