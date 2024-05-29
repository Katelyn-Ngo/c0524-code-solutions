'use strict';
let buttonClick = 0;
const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');
if (!$hotButton) throw new Error('The $hotButton query failed');
function handleClick(event) {
  buttonClick++;
  if (!$hotButton || !$clickCount) {
    throw new Error('The $hotButton or $clickCount query failed');
  }
  if (buttonClick < 4) {
    $hotButton.className = 'cold hot-button';
  } else if (buttonClick < 7) {
    $hotButton.className = 'cool hot-button';
  } else if (buttonClick < 10) {
    $hotButton.className = 'tepid hot-button';
  } else if (buttonClick < 13) {
    $hotButton.className = 'warm hot-button';
  } else if (buttonClick < 16) {
    $hotButton.className = 'hot hot-button';
  } else {
    $hotButton.className = 'nuclear hot-button';
  }
  $clickCount.textContent = 'Clicks: ' + buttonClick;
}
$hotButton.addEventListener('click', handleClick);
