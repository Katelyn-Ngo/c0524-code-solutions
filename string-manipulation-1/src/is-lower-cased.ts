/* exported isLowerCased */
function isLowerCased(word: string): boolean {
  const lowerCasedWord = word.toLowerCase();
  if (lowerCasedWord === word) {
    return true;
  } else {
    return false;
  }
}
