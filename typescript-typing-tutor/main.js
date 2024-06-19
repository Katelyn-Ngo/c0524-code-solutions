'use strict';
const textToType = 'grumpy wizards make toxic brew';
const $textElement = document.getElementById('text');
let currentIndex = 0;
let isIncorrect = false;
const charElements = [];
function initializeText() {
  for (let i = 0; i < textToType.length; i++) {
    const charElement = document.createElement('span');
    charElement.textContent = textToType[i];
    $textElement.appendChild(charElement);
    charElements.push(charElement);
  }
}
function updateText() {
  for (let i = 0; i < textToType.length; i++) {
    const charElement = charElements[i];
    if (i < currentIndex) {
      charElement.className = 'correct';
    } else if (i === currentIndex) {
      charElement.className = 'current';
    } else {
      charElement.className = '';
    }
  }
}
document.addEventListener('keydown', (event) => {
  const currentChar = textToType[currentIndex];
  if (!isIncorrect) {
    if (event.key === currentChar) {
      currentIndex++;
      isIncorrect = false;
    } else if (event.key === 'Backspace' && currentIndex > 0) {
      currentIndex--;
      isIncorrect = false;
    } else if (event.key !== 'Backspace') {
      isIncorrect = true;
    }
  } else if (event.key === 'Backspace') {
    isIncorrect = false;
  }
  updateText();
  if (isIncorrect && currentIndex < textToType.length) {
    charElements[currentIndex].className = 'incorrect';
  }
});
initializeText();
updateText();
