const textToType: string = 'grumpy wizards make toxic brew';
const $textElement = document.getElementById('text') as HTMLElement;
let currentIndex: number = 0;
let isIncorrect: boolean = false;
const charElements: HTMLElement[] = [];

function initializeText(): void {
  for (let i = 0; i < textToType.length; i++) {
    const charElement = document.createElement('span');
    charElement.textContent = textToType[i];
    $textElement.appendChild(charElement);
    charElements.push(charElement);
  }
}

function updateText(): void {
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

document.addEventListener('keydown', (event: KeyboardEvent) => {
  const currentChar: string = textToType[currentIndex];
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
