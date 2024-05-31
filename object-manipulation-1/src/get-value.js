'use strict';
/* exported getValue */
function getValue(object, key) {
  if (key in object) {
    return object[key];
  } else {
    return undefined;
  }
}
