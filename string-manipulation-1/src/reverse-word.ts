/* exported reverseWord */
function reverseWord(word: string): unknown {
  let reverseWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }
  return reverseWord;
}
