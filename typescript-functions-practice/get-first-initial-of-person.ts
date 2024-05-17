/* exported getFirstInitialOfPerson */
interface Person {
  firstName: string;
  lastName: string;
}

function getFirstInitialOfPerson(person: Person): any {
  return person.firstName[0];
}
