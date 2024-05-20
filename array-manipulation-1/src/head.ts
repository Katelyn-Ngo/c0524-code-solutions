/* exported head */
function head(array: unknown[]): unknown {
  if (array.length === 0) {
    return undefined;
  } else {
    return array[0];
  }
}
