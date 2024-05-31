/* exported getValue */
function getValue(object: Record<string, any>, key: string): any {
  if (key in object) {
    return object[key];
  } else {
    return undefined;
  }
}
