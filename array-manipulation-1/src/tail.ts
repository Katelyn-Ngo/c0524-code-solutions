/* exported tail */
function tail(array: unknown[]): unknown[] {
  const newArray = [];
  if (array.length > 1) {
    for (let i = 1; i < array.length; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
