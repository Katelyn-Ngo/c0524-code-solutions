/* exported getLastNameOfPerson */
interface Person {
  firstName: string;
  lastName: string;
}
function getLastNameOfPerson(person: Person): any {
  return person.lastName;
}
