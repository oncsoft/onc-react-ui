import React from 'react';
import PropTypes from 'prop-types';
import styleModules from './ListItem.module.css';
import { useTheme } from '../../utils/theme';
import Grid from '../Grid/Grid';

const ListItem = ({ value, style, type = 'primary', noBorder, onClick }) => {
  const theme = useTheme();
  const constColor =
    type === 'primary' ? theme.secondaryColor : theme.primaryColor;
  const styleVariables = {
    '--primaryColor': theme[`${type + 'Color'}`],
    '--secondaryColor': constColor,
    '--borderColor': noBorder ? '' : constColor,
  };
  const styles = { ...style, ...styleVariables };
  return (
    <Grid item={11} className={`${styleModules.listItem}`} style={styles}>
      <div onClick={onClick}>{value}</div>
    </Grid>
  );
};

ListItem.propTypes = {
  value: PropTypes.string,
  style: PropTypes.style,
  type: PropTypes.oneOf(['primary', 'secondary']),
  noBorder: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ListItem;
