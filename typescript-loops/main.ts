/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen(): number[] {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

console.log(getNumbersToTen());

function getEvenNumbersToTwenty(): number[] {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log(getEvenNumbersToTwenty());

function repeatWord(word: string, times: number): string {
  let count = 1;
  let repeated = '';
  while (count < times) {
    repeated += word;
    console.log(count);
    count++;
  }
  return repeated;
}
console.log(repeatWord('word', 4));

function logEachCharacter(str: string): void {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

function doubleAll(numbers: number[]): number[] {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log(doubleAll([3, 4, 5]));

function getKeys(obj: Record<string, unknown>): string[] {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}
console.log(getKeys({ name: 'katelyn', color: 'pink' }));

function getValues(obj: Record<string, unknown>): unknown[] {
  const values = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}
console.log(getValues({ name: 'katelyn', color: 'pink' }));
