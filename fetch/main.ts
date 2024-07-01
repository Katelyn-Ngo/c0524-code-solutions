async function fetchData(): Promise<void> {
  try {
    const response = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Irvine,ca,us,&appid=b03d66ceebc0a945c3eb2bb9cc3551d1&units=imperial'
    );
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

// async function fetchData2(): Promise<void> {
//   try {
//     const response2 = await fetch('https://jsonplaceholder.typicode.com/users');
//     if (!response2.ok) {
//       throw new Error(`HTTP error! status: ${response2.status}`);
//     }
//     const data2 = await response2.json();
//     console.log(data2);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }
// fetchData2();
