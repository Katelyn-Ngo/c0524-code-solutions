/* exported compact */
function compact(array: unknown[]): unknown[] {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const output = array[i];
    if (output) {
      newArray.push(output);
    }
  }
  return newArray;
}
