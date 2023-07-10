import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { CustomIconProviderProps } from './CustomIconProvider.interface';

const CustomIconProvider: FC<CustomIconProviderProps> = (props) => {
  const { icon, color, width, height, customSize, className, name, iconClassName } = props;

  const classes = twMerge(`
    ${className || ''}
  `);

  return (
    <div className={classes} data-testid={`icon.${name || 'default'}`}>
      {React.createElement(icon, {
        width: customSize || width || 24,
        height: customSize || height || 24,
        className: iconClassName
      })}
    </div>
  );
};

export default CustomIconProvider;
