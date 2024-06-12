'use strict';
console.log('In order:');
const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
values.forEach((values) => {
  console.log(values);
});
console.log('Reverse order:');
values.forEach((value, index) => {
  console.log(values[values.length - 1 - index]);
});
