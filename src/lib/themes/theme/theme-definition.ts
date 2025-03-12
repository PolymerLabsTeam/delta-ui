
export function ThemeDefinition<T extends { new(...args: any[]): {} }>(BaseObject: T) {
  const instance = new BaseObject();

  for (const key of Object.keys(instance)) {
    console.log(key);
  }
}
