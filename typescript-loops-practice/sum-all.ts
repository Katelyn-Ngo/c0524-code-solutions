/* exported sumAll */

function sumAll(numbers: number[]): number {
  let number = 0;
  for (let i = 0; i <= numbers.length - 1; i++) {
    number += numbers[i];
  }
  return number;
}
