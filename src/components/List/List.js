import React from 'react';
import PropTypes from 'prop-types';
import styleModules from './List.module.css';
import { getStyleVariables, useTheme } from '../../utils/theme';
import Grid from '../Grid/Grid';

const List = ({ children, style, type = 'primary' }) => {
  const theme = useTheme();
  const styleVariables = getStyleVariables({
    theme,
    style: {
      '--primaryColor': theme[`${type + 'Color'}`],
    },
  });
  const styles = { ...style, ...styleVariables };
  return (
    <Grid
      container
      direction={'column'}
      justifyContent={'flex-start'}
      alignItems={'center'}
      spacing={4}
      className={`${styleModules.listContainer}`}
      style={styles}
    >
      {children}
    </Grid>
  );
};

List.propTypes = {
  children: PropTypes.object,
  style: PropTypes.style,
  type: PropTypes.oneOf(['primary', 'secondary']),
};

export default List;
