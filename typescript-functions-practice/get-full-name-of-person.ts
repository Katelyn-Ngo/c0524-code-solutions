/* exported getFullNameOfPerson */
function getFullNameOfPerson(person: object): string {
  const firstName: string = person.firstName;
  const lastName: string = person.lastName;
  const fullName: string = `${firstName} ${lastName}`;

return fullName;
}
