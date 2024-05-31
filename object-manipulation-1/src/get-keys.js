'use strict';
/* exported getKeys */
function getKeys(object) {
  const keys = [];
  for (const key in object) {
    if (key in object) {
      keys.push(key);
    }
  }
  return keys;
}
