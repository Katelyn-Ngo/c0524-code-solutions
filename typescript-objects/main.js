'use strict';
const student = {
  firstName: 'Katelyn',
  lastName: 'Ngo',
  age: 28,
  livesInIrvine: false,
  previousOccupation: 'teacher',
};
console.log('value of student:', student);
const firstName = student.firstName;
const lastName = student.lastName;
const fullName = `${firstName} ${lastName}`;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'teacher';
console.log('value of student livesInIrvine:', student.livesInIrvine);
console.log('value of student previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
console.log('typeof student:', typeof student);
const vehicle = {
  make: 'toyota',
  model: 'camry',
  year: 2017,
};
vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
const pet = {
  name: 'charlie',
  kind: 'maltipoo',
};
delete pet.name;
delete pet.kind;
console.log('value of pet:', pet);
console.log('typeof pet:', typeof pet);
