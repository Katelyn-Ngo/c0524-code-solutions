/* exported toObject */
function toObject(keyValuePair: any): any {
  const obj = {};
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}
