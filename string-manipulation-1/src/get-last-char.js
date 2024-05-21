'use strict';
/* exported getLastChar */
function getLastChar(string) {
  if (string) {
    return string[string.length - 1];
  } else {
    return undefined;
  }
}
