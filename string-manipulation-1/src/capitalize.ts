/* exported capitalize */
function capitalize(word: string): unknown {
  if (word) {
    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.substring(1).toLowerCase();
    return firstLetter + restOfWord;
  } else {
    return undefined;
  }
}
