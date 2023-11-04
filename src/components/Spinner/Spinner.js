import React from 'react';
import PropTypes from 'prop-types';
import styleModules from './Spinner.module.css';
import Icon from '../Icon/Icon';
import { SpinnerSvg } from '../Icons';
import { getStyleVariables, useTheme } from '../../utils/theme';
import Grid from '../Grid/Grid';

const Spinner = ({ text, type = 'default', size = '1rem', style }) => {
  const theme = useTheme();
  const styleVariables = getStyleVariables({
    theme,
    style: {
      '--size': size,
    },
  });

  const styles = { ...style, ...styleVariables };

  return (
    <Grid
      container
      direction="column"
      justifyContent={'center'}
      alignItems={'center'}
      className={`${styleModules.spinnerContainer}`}
      style={styles}
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
  style: PropTypes.style,
};

export default Spinner;
