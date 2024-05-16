'use strict';
const heroes = ['wonder woman', 'superman', 'batman', 'hulk'];
const randomNumber = Math.random() * heroes.length;
console.log(randomNumber);
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);
const library = [
  {
    title: 'Nineteen Eighty-Four',
    author: 'George Orwell',
  },
  {
    title: 'Charlie is a Good Boy',
    author: 'Charlie',
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
  },
];
const lastBook = library.pop();
console.log('value of lastBook:', lastBook);
const firstBook = library.shift();
console.log('value of firstBook:', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library array:', library);
const fullName = 'Katelyn, Ngo';
const firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
const employee = {
  name: 'katelyn',
  age: 28,
  position: 'student',
};
const employeeKeys = Object.keys(employee);
console.log('value of employeeKeys:', employeeKeys);
const employeeValues = Object.values(employee);
console.log('value of employeeValues:', employeeValues);
const employeePairs = Object.entries(employee);
console.log('value of employeePairs:', employeePairs);
