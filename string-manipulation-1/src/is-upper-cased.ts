/* exported isUpperCased */
function isUpperCased(word: string): boolean {
  const upperCasedWord = word.toUpperCase();
  if (upperCasedWord === word) {
    return true;
  } else {
    return false;
  }
}
