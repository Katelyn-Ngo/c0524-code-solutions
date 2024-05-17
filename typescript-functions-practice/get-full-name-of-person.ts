/* exported getFullNameOfPerson */

interface Person {
  firstName: string;
  lastName: string;
}
function getFullNameOfPerson(person: Person): any {
  const firstName: string = person.firstName;
  const lastName: string = person.lastName;
  const fullName: string = `${firstName} ${lastName}`;

  return fullName;
}
