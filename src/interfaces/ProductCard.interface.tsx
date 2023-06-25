export interface ICardSection {
  width?: string;
  height?: string;
  direction?: string;
  justify?: string;
  align?: string;
  padding?: string;
  margin?: string;
  bgColor?: string;
  radius?: string;
  shadow?: string;
  overflow?: string;
}

export interface ICardTitle {
  ia?: boolean;
}

export interface ICardButton {
  bgColor?: string;
  color?: string;
  width?: string;
  height?: string;
  radius?: string;
  shadow?: string;
  margin?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
  transition?: string;
  hoverTransition?: string;
  disabled?: boolean;
  disabledBgColor?: string;
  border?: string;
  bgColorHover?: string;
  colorHover?: string;
  shadowHover?: string;
}
