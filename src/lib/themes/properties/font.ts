import { CssTransformable } from "./css-transformable";

export class Font extends CssTransformable<string[]> {
  constructor(...value: string[]) {
    super(value);
  }
  
  cssValue(): string {
    return this._value.join(", ");
  }
}
