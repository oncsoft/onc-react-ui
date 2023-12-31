import React from 'react';
import PropTypes from 'prop-types';
import { getStyleVariables, useTheme } from '../../utils/theme.js';
import styleModules from './Input.module.css';
import Grid from '../Grid/Grid.js';

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
  settings,
  readOnly,
  placeholder = 'Giriş Yapınız',
  gradient,
  ...props
}) => {
  const theme = useTheme();
  const styles = {
    ...style,
  };

  const errorStatus = value?.length > inputSize || error;

  const styleVariables = getStyleVariables({
    theme,
    style: {
      '--primaryColor': errorStatus
        ? theme.errorColor ?? 'red'
        : theme.primaryColor,
      '--shadowColor': noShadow ? '' : theme.shadowColor,
    },
  });

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
        } ${gradient ? styleModules['gradient'] : ''}`}
        style={{ ...styleVariables, ...bottomBorderUnset }}
      >
        <Grid
          container
          direction={'column'}
          justifyContent={'flex-start'}
          alignItems={'flex-start'}
          item={12}
          style={{ paddingTop: '0.1rem', paddingBottom: '0.1rem' }}
        >
          <div className={styleModules.inputLabel}>{label}</div>

          <Grid
            item={12}
            container
            direction={'row'}
            className={`${bordered ? styleModules.bordered : ''} ${
              rounded ? styleModules.rounded : ''
            }`}
            style={styleVariables}
            alignItems={'center'}
          >
            <Grid item={(inputSize && sizeControl >= 0) || settings ? 11 : 12}>
              <input
                className={`${styleModules.input} `}
                style={{ ...styles, ...styleVariables }}
                type={type}
                value={value}
                onChange={onChange}
                disabled={disabled}
                readOnly={readOnly}
                placeholder={placeholder}
                {...props}
              />
            </Grid>
            {inputSize && sizeControl >= 0 && (
              <Grid
                item={1}
                alignItems={'flex-end'}
                justifyContent={'flex-end'}
              >
                <div
                  className={`${styleModules.sizeLabel} ${
                    disabled ? styleModules.disabled : ''
                  }`}
                  style={styleVariables}
                >
                  {sizeControl}
                </div>
              </Grid>
            )}
            <Grid item={1} alignItems={'flex-end'} justifyContent={'flex-end'}>
              {settings ?? null}
            </Grid>
          </Grid>

          {errorStatus && (
            <div className={styleModules.errorMessage} style={styleVariables}>
              {error ?? 'Maksimum değeri geçtiniz.'}
            </div>
          )}
        </Grid>
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
  type: PropTypes.oneOf(['text', 'number', 'password']),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  style: PropTypes.object,
  bordered: PropTypes.bool,
  rounded: PropTypes.bool,
  noShadow: PropTypes.bool,
  placeholder: PropTypes.string,
  settings: PropTypes.any,
  gradient: PropTypes.bool,
};

export default Input;
