/* exported getKeys */
function getKeys(object: Record<string, any>): string[] {
  const keys: string[] = [];
  for (const key in object) {
    if (key in object) {
      keys.push(key);
    }
  }
  return keys;
}
