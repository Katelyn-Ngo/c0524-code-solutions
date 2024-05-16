'use strict';
function getDescriptionOfPerson(person) {
  const name = person.name;
  const occupation = person.occupation;
  const birthPlace = person.birthPlace;
  return `${name} is a ${occupation} from ${birthPlace}.`;
}
