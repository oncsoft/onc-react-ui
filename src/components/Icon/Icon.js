import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { getStyleVariables, useTheme } from '../../utils/theme';
import styleModules from './Icon.module.css';
const Icon = forwardRef(
  ({ size = '1rem', type, children, className, gradient }, ref) => {
    const theme = useTheme();
    const styleVariables = getStyleVariables({ theme });
    return (
      <>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              ref,
              width: size,
              height: size,
              style: { ...styleVariables },
              className: `${styleModules.icon} ${
                styleModules[type]
              } ${className} ${gradient ? styleModules['gradient'] : ''}`,
              preserveAspectRatio: 'none',
              version: '1.1',
            });
          }
          return null;
        })}
      </>
    );
  },
);

Icon.displayName = 'Icon';

Icon.defaultProps = {
  type: 'primary',
};

Icon.propTypes = {
  size: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary', 'disabled', 'error']),
  className: PropTypes.string,
  children: PropTypes.object,
  gradient: PropTypes.bool,
};

export default memo(Icon);
