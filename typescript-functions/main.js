'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log(convertMinutesToSeconds(5));
function greet(name) {
  return 'Hi' + ' ' + name;
}
console.log(greet('chubbybunny'));
const getArea = (width, height) => {
  return width * height;
};
console.log(getArea(17, 42));
const katelyn = {
  firstName: 'katelyn',
  lastName: 'ngo',
};
const getFirstName = (person) => {
  return person.firstName;
};
console.log(getFirstName(katelyn));
const getLastElement = (array) => {
  return array.length - 1;
};
console.log(getLastElement([3, 6, 8]));
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
console.log(callOtherFunction(getFirstName, katelyn));
