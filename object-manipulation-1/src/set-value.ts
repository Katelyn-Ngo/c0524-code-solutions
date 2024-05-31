/* exported setValue */
function setValue(object: Record<string, any>, key: string, value: any): void {
  object[key] = value;
  return undefined;
}
