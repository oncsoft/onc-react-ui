import React from 'react';
import stylesModule from './Switch.module.css';
import PropTypes from 'prop-types';
import { getStyleVariables, useTheme } from '../../utils/theme';

const Switch = ({ checked, onChange, type = 'default' }) => {
  const theme = useTheme();
  const styleVariables = getStyleVariables({ theme });
  const toggleSwitch = () => {
    onChange(!checked);
  };

  return (
    <div>
      <label className={`${stylesModule.switch}`}>
        <input
          type="checkbox"
          checked={checked}
          onChange={toggleSwitch}
          style={styleVariables}
        />
        <span
          className={`${stylesModule.slider} ${stylesModule[type]}`}
          style={styleVariables}
        ></span>
      </label>
    </div>
  );
};

Switch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['default', 'round']),
};

export default Switch;
