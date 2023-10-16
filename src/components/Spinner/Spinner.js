import React from 'react';
import PropTypes from 'prop-types';
import styleModules from './Spinner.module.css';
import Icon from '../Icon/Icon';
import { SpinnerSvg } from '../Icons';
import { useTheme } from '../../utils/theme';
import Grid from '../Grid/Grid';

const Spinner = ({ text, type = 'default', size = '1rem' }) => {
  const theme = useTheme();
  const styleVariables = {
    '--primaryColor': theme.primaryColor,
    '--secondaryColor': theme.secondaryColor,
    '--size': size,
  };
  return (
    <Grid
      container
      direction="column"
      justifyContent={'center'}
      alignItems={'center'}
      className={`${styleModules.spinnerContainer}`}
      style={styleVariables}
    >
      <Grid>
        <Icon size={size} className={`${styleModules.svgIcon}`}>
          <SpinnerSvg />
        </Icon>
      </Grid>
      <Grid
        className={`${styleModules[type]} ${styleModules.text}`}
        style={styleVariables}
      >
        {text}
      </Grid>
    </Grid>
  );
};

Spinner.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['default', 'spot']),
  size: PropTypes.oneOf(['1rem', '2rem', '3rem']),
};

export default Spinner;
