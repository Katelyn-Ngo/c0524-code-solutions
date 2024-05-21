/* exported countdown */

function countdown(num: number): number[] {
  const number = [];
  for (let i = num; i >= 0; i--) {
    number.push(i);
  }
  return number;
}
