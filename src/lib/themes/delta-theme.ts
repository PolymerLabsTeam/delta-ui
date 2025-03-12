import { Color } from '@/themes/properties/color';
import { Font } from '@/themes/properties/font';
import { Numeric } from '@/themes/properties/Numeric';
import { Px } from '@/themes/properties/px';
import { Theme } from '@/themes/theme/theme';
import { ThemeDefinition } from '@/themes/theme/theme-definition';

@ThemeDefinition
export class DarkTheme implements Theme {
  name = 'dark';

  displayFont = new Font('"Helvetica Neue', 'sans-serif');
  bodyFont = new Font('"Helvetica"', 'sans-serif');
  numericFont = new Font('"Helvetica"', 'sans-serif');
  monospaceFont = new Font('"Courier"', 'monospace');

  borderRadius0 = new Px(0);
  borderRadius1 = new Px(2);
  borderRadius2 = new Px(4);
  borderRadius3 = new Px(6);
  borderRadius4 = new Px(8);

  fontSizeBody1 = new Px(10);
  fontSizeBody2 = new Px(12);
  fontSizeBody3 = new Px(14);
  fontSizeBody4 = new Px(16);
  fontSizeBody5 = new Px(20);
  fontSizeBody6 = new Px(24);
  fontSizeHero1 = new Px(28);
  fontSizeHero2 = new Px(32);
  fontSizeHero3 = new Px(40);
  fontSizeHero4 = new Px(68);

  lineHeightBody1 = new Px(14);
  lineHeightBody2 = new Px(16);
  lineHeightBody3 = new Px(20);
  lineHeightBody4 = new Px(22);
  lineHeightBody5 = new Px(28);
  lineHeightBody6 = new Px(32);
  lineHeightHero1 = new Px(36);
  lineHeightHero2 = new Px(40);
  lineHeightHero3 = new Px(52);
  lineHeightHero4 = new Px(92);

  fontWeightRegular = new Numeric(400);
  fontWeightMedium = new Numeric(500);
  fontWeightSemibold = new Numeric(600);
  fontWeightBold = new Numeric(700);

  strokeWidth1 = new Px(1);
  strokeWidth2 = new Px(2);
  strokeWidth3 = new Px(3);
  strokeWidth4 = new Px(4);

  spacingHorizontal1 = new Px(2);
  spacingHorizontal2 = new Px(4);
  spacingHorizontal3 = new Px(6);
  spacingHorizontal4 = new Px(8);
  spacingHorizontal5 = new Px(10);
  spacingHorizontal6 = new Px(12);
  spacingHorizontal7 = new Px(16);
  spacingHorizontal8 = new Px(20);
  spacingHorizontal9 = new Px(24);
  spacingHorizontal10 = new Px(32);

  spacingVertical1 = new Px(2);
  spacingVertical2 = new Px(4);
  spacingVertical3 = new Px(6);
  spacingVertical4 = new Px(8);
  spacingVertical5 = new Px(10);
  spacingVertical6 = new Px(12);
  spacingVertical7 = new Px(16);
  spacingVertical8 = new Px(20);
  spacingVertical9 = new Px(24);
  spacingVertical10 = new Px(32);

  colorNeutralForeground1 = new Color({ h: 0, s: 0, l: 1, a: 1 });
  colorNeutralForegroundHover1 = new Color({ h: 0, s: 0, l: 1, a: 1 });
  colorNeutralForegroundPressed1 = new Color({ h: 0, s: 0, l: 1, a: 1 });
  colorNeutralForegroundSelected1 = new Color({ h: 0, s: 0, l: 1, a: 1 });

  colorNeutralForeground2 = new Color({ h: 0, s: 0, l: 1, a: 1 });
  colorNeutralForegroundHover2 = new Color({ h: 0, s: 0, l: 1, a: 1 });
  colorNeutralForegroundPressed2 = new Color({ h: 0, s: 0, l: 1, a: 1 });
  colorNeutralForegroundSelected2 = new Color({ h: 0, s: 0, l: 1, a: 1 });

  colorNeutralForeground3 = new Color({ h: 0, s: 0, l: 0.68, a: 1 });
  colorNeutralForegroundHover3 = new Color({ h: 0, s: 0, l: 0.84, a: 1 });
  colorNeutralForegroundPressed3 = new Color({ h: 0, s: 0, l: 0.84, a: 1 });
  colorNeutralForegroundSelected3 = new Color({ h: 0, s: 0, l: 0.84, a: 1 });

  colorNeutralForeground4 = new Color({ h: 0, s: 0, l: 0.6, a: 1 });
  colorNeutralForegroundHover4 = new Color({ h: 0, s: 0, l: 0.73, a: 1 });
  colorNeutralForegroundPressed4 = new Color({ h: 0, s: 0, l: 0.73, a: 1 });
  colorNeutralForegroundSelected4 = new Color({ h: 0, s: 0, l: 0.73, a: 1 });

  colorNeutralForegroundLink = new Color({ h: 210, s: 0.9, l: 0.62, a: 1 });
  colorNeutralForegroundHoverLink = new Color({ h: 210, s: 0.9, l: 0.62, a: 1 });
  colorNeutralForegroundPressedLink = new Color({ h: 210, s: 0.9, l: 0.62, a: 1 });
  colorNeutralForegroundSelectedLink = new Color({ h: 210, s: 0.9, l: 0.62, a: 1 });

  colorNeutralBackground1 = new Color({ h: 0, s: 0, l: 0.16, a: 1 });
  colorNeutralBackgroundHover1 = new Color({ h: 0, s: 0, l: 0.24, a: 1 });
  colorNeutralBackgroundPressed1 = new Color({ h: 0, s: 0, l: 0.12, a: 1 });
  colorNeutralBackgroundSelected1 = new Color({ h: 0, s: 0, l: 0.22, a: 1 });

  colorNeutralBackground2 = new Color({ h: 0, s: 0, l: 0.12, a: 1 });
  colorNeutralBackgroundHover2 = new Color({ h: 0, s: 0, l: 0.2, a: 1 });
  colorNeutralBackgroundPressed2 = new Color({ h: 0, s: 0, l: 0.08, a: 1 });
  colorNeutralBackgroundSelected2 = new Color({ h: 0, s: 0, l: 0.18, a: 1 });

  colorNeutralBackground3 = new Color({ h: 0, s: 0, l: 0.08, a: 1 });
  colorNeutralBackgroundHover3 = new Color({ h: 0, s: 0, l: 0.16, a: 1 });
  colorNeutralBackgroundPressed3 = new Color({ h: 0, s: 0, l: 0.04, a: 1 });
  colorNeutralBackgroundSelected3 = new Color({ h: 0, s: 0, l: 0.14, a: 1 });

  colorNeutralBackground4 = new Color({ h: 0, s: 0, l: 0.04, a: 1 });
  colorNeutralBackgroundHover4 = new Color({ h: 0, s: 0, l: 0.16, a: 1 });
  colorNeutralBackgroundPressed4 = new Color({ h: 0, s: 0, l: 0, a: 1 });
  colorNeutralBackgroundSelected4 = new Color({ h: 0, s: 0, l: 0.14, a: 1 });

  colorNeutralBackgroundLink = new Color({ h: 0, s: 0, l: 0, a: 0 });
  colorNeutralBackgroundHoverLink = new Color({ h: 0, s: 0, l: 0, a: 0 });
  colorNeutralBackgroundPressedLink = new Color({ h: 0, s: 0, l: 0, a: 0 });
  colorNeutralBackgroundSelectedLink = new Color({ h: 0, s: 0, l: 0, a: 0 });
}
