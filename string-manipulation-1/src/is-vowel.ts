/* exported isVowel */
function isVowel(char: string): boolean {
  char = char.toLowerCase();
  const isVowel = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < isVowel.length; i++) {
    if (char === isVowel[i]) {
      return true;
    }
  }
  return false;
}
