'use strict';
/* exported isLowerCased */
function isLowerCased(word) {
  const lowerCasedWord = word.toLowerCase();
  if (lowerCasedWord === word) {
    return true;
  } else {
    return false;
  }
}
