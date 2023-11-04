import React from 'react';
import PropTypes from 'prop-types';
import CheckSvg from '../Icons/CheckSvg.js';
import Icon from '../Icon/Icon.js';
import stylesModule from './Checkbox.module.css';
import { getStyleVariables, useTheme } from '../../utils/theme.js';
const Checkbox = ({
  label,
  value,
  onChange,
  style,
  type,
  disabled,
  gradient,
}) => {
  const theme = useTheme();
  const styleVariables = getStyleVariables({
    theme,
    style: {
      '--primaryColor': disabled ? theme.disabledColor : theme[`${type}Color`],
    },
  });
  return (
    <label
      className={`${stylesModule.checkboxContainer} ${
        disabled ? stylesModule.disabled : ''
      } `}
      style={{ style, ...styleVariables }}
    >
      <input
        className={`${stylesModule.checkbox}`}
        type="checkbox"
        checked={value}
        onChange={onChange}
        disabled={disabled ?? false}
      />
      <span
        className={`${stylesModule.checkmark} ${
          disabled ? stylesModule.disabled : ''
        } ${gradient ? stylesModule['gradient'] : ''} `}
        style={styleVariables}
      >
        {value ? (
          <Icon type={disabled ? 'disabled' : type}>
            <CheckSvg />
          </Icon>
        ) : null}
      </span>
      {label}
    </label>
  );
};

Checkbox.defaultProps = {
  type: 'primary',
};

Checkbox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  style: PropTypes.object,
  type: PropTypes.oneOf(['primary', 'secondary', 'error']),
  disabled: PropTypes.bool,
  gradient: PropTypes.bool,
};

export default Checkbox;
