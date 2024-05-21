'use strict';
/* exported countdown */
function countdown(num) {
  const number = [];
  for (let i = num; i >= 0; i--) {
    number.push(i);
  }
  return number;
}
