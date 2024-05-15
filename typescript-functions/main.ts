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

const getFirstName = (person: {
  firstName: string;
  lastName: string;
}): string => {
  return person.firstName;
};

interface person {
  firstName: string;
  lastName: string;
}
const katelyn: person = {
  firstName: 'katelyn',
  lastName: 'ngo',
};

console.log(getFirstName);
console.log(katelyn);

const getLastElement = (array: any[]): number => {
  return array.length - 1;
};

console.log(getLastElement);

function callOtherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}

console.log(callOtherFunction);
