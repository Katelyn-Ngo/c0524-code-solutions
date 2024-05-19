/* exported oddOrEven */

function oddOrEven(numbers: unknown[]): string[] {
  const newArray: string[] = [];
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === 'number') {
      if (numbers[i] % 2 === 0) {
        newArray.push('even');
      } else {
        newArray.push('odd');
      }
    }
  }
  return newArray;
}
