import { CssTransformable } from "@/themes/properties/css-transformable";

export class Px extends CssTransformable<Number> {
  constructor(value: Number) {
    super(value);
  }
  
  cssValue(): string {
    return `${this._value}px`;
  }
}
