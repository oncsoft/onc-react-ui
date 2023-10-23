import React from 'react';
import PropTypes from 'prop-types';
import styleModules from './TextArea.module.css';
import { useTheme } from '../../utils/theme';

const TextArea = ({
  label,
  value,
  onChange,
  placeholder,
  rows,
  bordered,
  rounded,
  noShadow,
}) => {
  const theme = useTheme();
  const styleVariables = {
    '--primaryColor': theme.primaryColor,
    '--shadowColor': noShadow ? '' : theme.shadowColor,
  };
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
        }`}
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
};

export default TextArea;
