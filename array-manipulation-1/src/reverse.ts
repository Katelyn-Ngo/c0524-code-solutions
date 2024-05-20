/* exported reverse */
function reverse(array: unknown[]): unknown[] {
  const newArray = [];
  if (array.length > 0) {
    for (let i = array.length - 1; i >= 0; i--) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
