'use strict';
/* exported isUpperCased */
function isUpperCased(word) {
  const upperCasedWord = word.toUpperCase();
  if (upperCasedWord === word) {
    return true;
  } else {
    return false;
  }
}
