/* exported initial */
function initial(array: unknown[]): unknown[] {
  const newArray = [];
  if (array.length > 1) {
    for (let i = 0; i < array.length - 1; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
