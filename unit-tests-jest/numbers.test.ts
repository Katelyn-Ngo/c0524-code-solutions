import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0, 7.4, -8];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0, -8]);
  });
});
describe('evenNumbers', () => {
  it('returns empty array', () => {
    const numbers: number[] = [];
    const result = evenNumbers(numbers);
    expect(result).toEqual([]);
  });
});

describe('toDollars', () => {
  it('returns number formatted in dollars and cents', () => {
    const result = toDollars(4.5);
    expect(result).toEqual('$4.50');
  });
});

describe('divideBy', () => {
  it('returns a new array with numbers divided by the divisor', () => {
    const numbers = [50, 60, 70];
    const result = divideBy(numbers, 10);
    expect(result).toEqual([5, 6, 7]);
  });
});

describe('divideBy', () => {
  it('divides by 4', () => {
    expect(divideBy([2, 3, 4, 8], 4)).toEqual([0.5, 0.75, 1, 2]);
  });
  it('returns different array', () => {
    const numbers = [2, 3, 4, 8];
    const result = divideBy(numbers, 4);
    expect(result).toEqual([0.5, 0.75, 1, 2]);
    expect(result).not.toBe(numbers);
  });
});

describe('multiplyBy', () => {
  it('returns multiple value number', () => {
    const object = { a: 2, b: true, c: 6 };
    const result = multiplyBy(object, 3);
    expect(result).toEqual({ a: 6, b: true, c: 18 });
  });
});
