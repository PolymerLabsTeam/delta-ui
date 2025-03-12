import { Color } from "@/themes/properties/color";
import { Font } from "@/themes/properties/font";
import { Numeric } from "@/themes/properties/Numeric";
import { Px } from "@/themes/properties/px";

export interface Theme {
  name: string;

  displayFont: Font;
  bodyFont: Font;
  monospaceFont: Font;
  numericFont: Font;

  borderRadius0: Px;
  borderRadius1: Px;
  borderRadius2: Px;
  borderRadius3: Px;
  borderRadius4: Px;

  fontSizeBody1: Px;
  fontSizeBody2: Px;
  fontSizeBody3: Px;
  fontSizeBody4: Px;
  fontSizeBody5: Px;
  fontSizeBody6: Px;
  fontSizeHero1: Px;
  fontSizeHero2: Px;
  fontSizeHero3: Px;
  fontSizeHero4: Px;

  lineHeightBody1: Px;
  lineHeightBody2: Px;
  lineHeightBody3: Px;
  lineHeightBody4: Px;
  lineHeightBody5: Px;
  lineHeightBody6: Px;
  lineHeightHero1: Px;
  lineHeightHero2: Px;
  lineHeightHero3: Px;
  lineHeightHero4: Px;

  fontWeightRegular: Numeric;
  fontWeightMedium: Numeric;
  fontWeightSemibold: Numeric;
  fontWeightBold: Numeric;

  strokeWidth1: Px;
  strokeWidth2: Px;
  strokeWidth3: Px;
  strokeWidth4: Px;

  spacingHorizontal1: Px;
  spacingHorizontal2: Px;
  spacingHorizontal3: Px;
  spacingHorizontal4: Px;
  spacingHorizontal5: Px;
  spacingHorizontal6: Px;
  spacingHorizontal7: Px;
  spacingHorizontal8: Px;
  spacingHorizontal9: Px;
  spacingHorizontal10: Px;

  spacingVertical1: Px;
  spacingVertical2: Px;
  spacingVertical3: Px;
  spacingVertical4: Px;
  spacingVertical5: Px;
  spacingVertical6: Px;
  spacingVertical7: Px;
  spacingVertical8: Px;
  spacingVertical9: Px;
  spacingVertical10: Px;

  colorNeutralForeground1: Color;
  colorNeutralForegroundHover1: Color;
  colorNeutralForegroundPressed1: Color;
  colorNeutralForegroundSelected1: Color;

  colorNeutralForeground2: Color;
  colorNeutralForegroundHover2: Color;
  colorNeutralForegroundPressed2: Color;
  colorNeutralForegroundSelected2: Color;

  colorNeutralForeground3: Color;
  colorNeutralForegroundHover3: Color;
  colorNeutralForegroundPressed3: Color;
  colorNeutralForegroundSelected3: Color;

  colorNeutralForeground4: Color;
  colorNeutralForegroundHover4: Color;
  colorNeutralForegroundPressed4: Color;
  colorNeutralForegroundSelected4: Color;

  colorNeutralForegroundLink: Color;
  colorNeutralForegroundHoverLink: Color;
  colorNeutralForegroundPressedLink: Color;
  colorNeutralForegroundSelectedLink: Color;

  colorNeutralBackground1: Color;
  colorNeutralBackgroundHover1: Color;
  colorNeutralBackgroundPressed1: Color;
  colorNeutralBackgroundSelected1: Color;

  colorNeutralBackground2: Color;
  colorNeutralBackgroundHover2: Color;
  colorNeutralBackgroundPressed2: Color;
  colorNeutralBackgroundSelected2: Color;

  colorNeutralBackground3: Color;
  colorNeutralBackgroundHover3: Color;
  colorNeutralBackgroundPressed3: Color;
  colorNeutralBackgroundSelected3: Color;
  
  colorNeutralBackground4: Color;
  colorNeutralBackgroundHover4: Color;
  colorNeutralBackgroundPressed4: Color;
  colorNeutralBackgroundSelected4: Color;

  colorNeutralBackgroundLink: Color;
  colorNeutralBackgroundHoverLink: Color;
  colorNeutralBackgroundPressedLink: Color;
  colorNeutralBackgroundSelectedLink: Color;
}
