import { FC } from 'react';
import { ThemeColor } from '../enum/themeColor.enum';

export interface CustomIconProviderProps {
  className?: string;
  iconClassName?: string;
  icon: string | FC<IconComponent>;
  customSize?: number;
  color?: ThemeColor | string;
  name?: string;
}

export interface IconComponent {
  width: number;
  height: number;
  color: string;
  className?: string;
}
