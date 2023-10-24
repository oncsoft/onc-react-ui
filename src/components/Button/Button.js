import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../utils/theme.js';
import styleModules from './Button.module.css';
const sizes = {
  sm: {
    paddingSize: 0.5,
    fontSize: 0.75,
  },
  md: {
    paddingSize: 0.75,
    fontSize: 1,
  },
  lg: {
    paddingSize: 1,
    fontSize: 1.2,
  },
};
const Button = ({
  label,
  size,
  onClick,
  disabled,
  type,
  rounded,
  icon,
  noShadow,
  style = {},
  ref,
}) => {
  const theme = useTheme();
  const styles = {
    ...style,
    '--primaryColor': theme.primaryColor,
    '--secondaryColor': theme.secondaryColor,
    '--paddingSize': sizes[size ?? 'md'].paddingSize,
    '--fontSize': sizes[size ?? 'md'].fontSize,
    '--shadowColor': noShadow ? 'transparent' : theme.shadowColor,
    '--disabledColor': theme.disabledColor,
  };

  return (
    <button
      ref={ref}
      className={`${styleModules.button} ${styleModules[type ?? 'primary']} ${
        rounded ? styleModules.rounded : ''
      } ${icon ? styleModules.icon : ''}`}
      style={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'secondary', 'transparent']),
  rounded: PropTypes.bool,
  icon: PropTypes.any,
  noShadow: PropTypes.bool,
  style: PropTypes.object,
  ref: PropTypes.ref,
};

export default Button;
