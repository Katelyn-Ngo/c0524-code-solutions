/* exported getLastChar */
function getLastChar(string: string): unknown {
  if (string) {
    return string[string.length - 1];
  } else {
    return undefined;
  }
}
