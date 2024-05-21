/* exported getWords */
function getWords(string: string): unknown {
  if (string.trim() === '') {
    return [];
  }
  return string.split(' ');
}
