'use strict';
/* exported capitalize */
function capitalize(word) {
  if (word) {
    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.substring(1).toLowerCase();
    return firstLetter + restOfWord;
  } else {
    return undefined;
  }
}
