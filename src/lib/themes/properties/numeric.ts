import { CssTransformable } from "./css-transformable";

export class Numeric extends CssTransformable<number> {
  constructor(value: number) {
    super(value);
  }
  
  cssValue(): string {
    return `${this._value}`;
  }
}
