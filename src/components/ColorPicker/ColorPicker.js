import React from 'react';
import PropTypes from 'prop-types';
import styleModules from './ColorPicker.module.css';
import Input from '../Input/Input';
const ColorPicker = ({
  value,
  onChange,
  label,
  bordered,
  rounded,
  placeholder = 'Giriş Yapınız',
  gradient,
}) => {
  return (
    <div className={`${styleModules.colorPickerContainer}`}>
      <Input
        value={value}
        label={label}
        rounded={rounded}
        placeholder={placeholder}
        bordered={bordered}
        gradient={gradient}
        settings={
          <input
            className={styleModules.colorPicker}
            type="color"
            onChange={onChange}
          />
        }
      />
    </div>
  );
};

ColorPicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  bordered: PropTypes.bool,
  rounded: PropTypes.bool,
  placeholder: PropTypes.string,
  gradient: PropTypes.bool,
};

export default ColorPicker;
