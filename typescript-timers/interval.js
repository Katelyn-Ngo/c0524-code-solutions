'use strict';
const $heading = document.querySelector('h1');
if ($heading) {
  let countdownValue = 4;
  const updateHeading = () => {
    if (countdownValue > 0) {
      $heading.textContent = countdownValue.toString();
      countdownValue--;
    } else {
      $heading.textContent = '~Earth Beeeelooowww Us~';
      clearInterval(intervalID);
    }
  };
  if (!$heading) throw new Error('header is not valid ');
  const intervalID = setInterval(updateHeading, 1000);
}
