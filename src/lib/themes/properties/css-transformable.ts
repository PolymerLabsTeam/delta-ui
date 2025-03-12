
export abstract class CssTransformable<T> {
  public readonly cssVariable!: string;
  
  protected _value: T;

  constructor(value: T) {
    this._value = value;
  }

  abstract cssValue(): string;
}
