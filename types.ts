export interface NavItem {
  label: string;
  href: string;
}

export interface ColorSwatch {
  name: string;
  hex: string;
  pantone?: string;
  usage: string;
  textColor: 'text-white' | 'text-brand-maroonDeep';
}

export interface TypographySample {
  role: string;
  font: string;
  weight: string;
  size: string;
  sample: string;
}

export enum Theme {
  Light = 'light',
  Dark = 'dark'
}
