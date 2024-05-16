'use strict';
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
const person = {
  name: 'Charlie Ngo',
  age: 6,
};
function isUnderFive(age) {
  if (age < 5) {
    return 'true';
  } else {
    return 'false';
  }
}
console.log(isUnderFive(6));
function isEven(age) {
  if (age % 2) {
    return 'true';
  } else {
    return 'false';
  }
}
console.log(isEven(6 % 2));
function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
console.log(startsWithJ('string'));
function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
console.log(isOldEnoughToDrink(person));
function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
console.log(isOldEnoughToDrive(person));
function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 16 && person.age >= 21) {
    return false;
  } else {
    return false;
  }
}
console.log(isOldEnoughToDrinkAndDrive(person));
function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH === 0 && pH >= 7) {
    return 'acid';
  } else if (pH >= 7 && pH >= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
console.log(categorizeAcidity(7));
function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight Everybody!';
  }
}
console.log(introduceWarnerBro('yakko'));
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Superman the movie';
    case 'comedy':
      return 'Nacho Libre';
    case 'horror':
      return 'The Nun';
    case 'drama':
      return 'Korean dramas!!!';
    case 'musical':
      return 'the movie with Emma Stone';
    case 'sci-fi':
      return 'criminal minds';
    default:
      return 'Please choose from above!';
  }
}
console.log(recommendMovie('drama'));
