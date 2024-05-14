const colors: string[] = ['red', 'white', 'blue'];
const firstColor: string = colors[0];
const secondColor: string = colors[1];
const thirdColor: string = colors[2];
console.log('value of colors[0]:', firstColor);
console.log('value of colors[1]:', secondColor);
console.log('value of colors[2]:', thirdColor);

const AmericaColors: string = `America is ${firstColor} ${secondColor} ${thirdColor}`;
console.log(AmericaColors);

colors[2] = 'green';
const MexicoColors: string = `Mexico is ${firstColor} ${secondColor} ${colors[2]}`;
console.log(MexicoColors);

console.log('value of colors:', colors);
console.log('typeof colors:', typeof colors);

const students: string[] = ['charlie', 'billy', 'ken', 'ben'];
const numberOfStudents: number = students.length;
console.log('There are four students:', numberOfStudents);
const lastIndex: number = numberOfStudents - 1;

const lastStudent: string = students[lastIndex];
console.log(`the last student in the array is ${lastStudent}`);
console.log('value of students', students);
