'use strict';
/* exported sumAll */
function sumAll(numbers) {
  let number = 0;
  for (let i = 0; i <= numbers.length - 1; i++) {
    number += numbers[i];
  }
  return number;
}
