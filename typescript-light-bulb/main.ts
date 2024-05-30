const $background = document.querySelector('.background');
const $lightBulb = document.querySelector('.lightBulb');
if (!$background) throw new Error('$background does not exist');
if (!$lightBulb) throw new Error('$lightBulb does not exist');

let lightOn = true;

$lightBulb.addEventListener('click', () => {
  if (lightOn) {
    $lightBulb.className = 'lightBulb lb-night';
    $background.className = 'background bg-night';
    lightOn = false;
  } else {
    $lightBulb.className = 'lightBulb lb-day';
    $background.className = 'background bg-day';
    lightOn = true;
  }
});
