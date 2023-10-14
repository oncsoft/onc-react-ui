import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../utils/theme.js';
import styleModules from './Icon.module.css';
const Icon = forwardRef(({ size = '1rem', type, children }, ref) => {
  const theme = useTheme();
  const styleVariables = {
    '--primaryColor': theme.primaryColor,
    '--errorColor': theme.errorColor,
    '--disabledColor': theme.disabledColor,
  };
  return (
    <>
      {React.Children.map(children, (child) => {
        console.error(child);
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ref,
            width: size,
            height: size,
            style: { ...styleVariables },
            className: `${styleModules.icon} ${styleModules[type]}`,
            preserveAspectRatio: 'none',
            version: '1.1',
          });
        }
        return null; // Geçersiz bir elementi atlayın veya işlemeyin
      })}
    </>
  );
});

Icon.displayName = 'Icon';

Icon.defaultProps = {
  type: 'primary',
};

Icon.propTypes = {
  size: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary', 'disabled', 'error']),
  children: PropTypes.object,
};
export default memo(Icon);
