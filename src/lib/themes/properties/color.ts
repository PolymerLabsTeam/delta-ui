import { CssTransformable } from "./css-transformable";

export class Color extends CssTransformable<Hsla> {
  constructor(value: Hsla) {
    super(value);
  }
  
  cssValue(): string {
    return HslToHex(this._value);
  }
}

const HueToRgb = (hue: number, lightness: number, n: number, a: number): string => {
  const k = (n + hue / 30) % 12;
  const color = lightness - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

  return Math.round(255 * color).toString(16).padStart(2, '0');
}

function HslToHex(hsla: Hsla): string {
  const l = hsla.l / 100;
  const a = hsla.s * Math.min(l, 1 - l) / 100;

  const r = HueToRgb(hsla.h, l, 0, a);
  const g = HueToRgb(hsla.h, l, 8, a);
  const b = HueToRgb(hsla.h, l, 4, a);
  
  return `#${r}${g}${b}`;
}

export interface Hsla {
  h: number,
  s: number,
  l: number,
  a: number
};
