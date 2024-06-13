'use strict';
async function fetchData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/3');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchData();
async function fetchData2() {
  try {
    const response2 = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response2.ok) {
      throw new Error(`HTTP error! status: ${response2.status}`);
    }
    const data2 = await response2.json();
    console.log(data2);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchData2();
