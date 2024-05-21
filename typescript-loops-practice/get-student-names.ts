/* exported getStudentNames */
interface Person {
  name: string;
}

function getStudentNames(students: Person[]): string[] {
  const newArray = [];
  for (let i = 0; i < students.length; i++) {
    newArray.push(students[i].name);
  }
  return newArray;
}
