import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../utils/theme.js';
import styleModules from './Input.module.css';

const Input = ({
  label,
  value,
  onChange,
  inputSize,
  error,
  type,
  disabled,
  style = {},
  bordered,
  rounded,
  noShadow,
  ...props
}) => {
  const theme = useTheme();
  const styles = {
    ...style,
  };

  const errorStatus = value?.length > inputSize || error;

  const styleVariables = {
    '--primaryColor': errorStatus
      ? theme.errorColor ?? 'red'
      : theme.primaryColor,
    '--shadowColor': noShadow ? '' : theme.shadowColor,
    '--disabledColor': theme.disabledColor,
  };

  const bottomBorderUnset =
    rounded || bordered
      ? {
          borderBottom: 0,
        }
      : {};

  const sizeControl = inputSize - (value?.length ?? 0);

  return (
    <>
      <div
        className={`${styleModules.inputContainer} ${
          disabled ? styleModules.disabled : ''
        }`}
        style={{ ...styleVariables, ...bottomBorderUnset }}
      >
        <div className={styleModules.inputLabel}>{label}</div>
        <input
          className={`${styleModules.input} ${
            bordered ? styleModules.bordered : ''
          } ${rounded ? styleModules.rounded : ''}`}
          style={{ ...styles, ...styleVariables }}
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
        {inputSize && sizeControl >= 0 && (
          <div
            className={`${styleModules.sizeLabel} ${
              disabled ? styleModules.disabled : ''
            }`}
            style={styleVariables}
          >
            {sizeControl}
          </div>
        )}
        {errorStatus && (
          <div className={styleModules.errorMessage} style={styleVariables}>
            {error ?? 'Maksimum değeri geçtiniz.'}
          </div>
        )}
      </div>
    </>
  );
};

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  inputSize: PropTypes.number,
  error: PropTypes.string,
  type: PropTypes.oneOf('text', 'number'),
  disabled: PropTypes.bool,
  style: PropTypes.object,
  bordered: PropTypes.bool,
  rounded: PropTypes.bool,
  noShadow: PropTypes.bool,
};

export default Input;
