import React from 'react';
import PropTypes from 'prop-types';
import styleModules from './TextArea.module.css';
import { getStyleVariables, useTheme } from '../../utils/theme';

const TextArea = ({
  label,
  value,
  onChange,
  placeholder,
  rows,
  bordered,
  rounded,
  noShadow,
  gradient,
}) => {
  const theme = useTheme();
  const styleVariables = getStyleVariables({
    theme,
    style: {
      '--shadowColor': noShadow ? '' : theme.shadowColor,
    },
  });

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div
      className={`${styleModules.textareaContainer} `}
      style={styleVariables}
    >
      <div className={styleModules.textAreaLabel}>{label}</div>
      <textarea
        className={`${bordered ? styleModules['bordered'] : ''} ${
          rounded ? styleModules['rounded'] : ''
        } ${gradient ? styleModules['gradient'] : ''}`}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
      />
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  bordered: PropTypes.bool,
  rounded: PropTypes.bool,
  noShadow: PropTypes.bool,
  gradient: PropTypes.bool,
};

export default TextArea;
