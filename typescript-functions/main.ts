interface Person {
  firstName: string;
  lastName: string;
}
function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}
console.log(convertMinutesToSeconds(5));

function greet(name: string): string {
  return 'Hi' + ' ' + name;
}
console.log(greet('chubbybunny'));

const getArea = (width: number, height: number): number => {
  return width * height;
};
console.log(getArea(17, 42));

const katelyn: Person = {
  firstName: 'katelyn',
  lastName: 'ngo',
};

const getFirstName = (person: Person): string => {
  return person.firstName;
};
console.log(getFirstName(katelyn));

const getLastElement = (array: any[]): number => {
  return array.length - 1;
};

console.log(getLastElement([3, 6, 8]));

function callOtherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}

console.log(callOtherFunction);
