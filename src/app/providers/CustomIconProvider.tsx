import React, { FC } from 'react';
import BaseView from '../components/common/base-view/BaseView';
import useDarkMode from '../hooks/useDarkMode';
import { getThemeColor } from '../utils/themeUtil';
import { CustomIconProviderProps } from './CustomIconProvider.interface';
import { twMerge } from 'tailwind-merge';

const CustomIconProvider: FC<CustomIconProviderProps> = (props) => {
  const { icon, color, customSize, className, name, iconClassName } = props;
  const { isDarkMode } = useDarkMode();

  const classes = twMerge(`
    ${className || ''}
  `);

  return (
    <BaseView className={classes} data-testid={`icon.${name || 'default'}`}>
      {React.createElement(icon, {
        width: customSize || 24,
        height: customSize || 24,
        color: (color && getThemeColor(color)) || getThemeColor(isDarkMode ? 'slate.200' : 'slate.600'),
        className: iconClassName,
      })}
    </BaseView>
  );
};

export default CustomIconProvider;
