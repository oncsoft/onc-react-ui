import React from 'react';
import PropTypes from 'prop-types';
import styleModules from './Grid.module.css';

const Grid = ({
  container,
  direction,
  justifyContent,
  alignItems,
  spacing,
  item,
  style = {},
  children,
}) => {
  const styles = {
    ...style,
    '--spacing': spacing ?? 0,
    '--justifyContent': justifyContent,
    '--alignItems': alignItems,
    '--item': item ?? 1,
  };
  return (
    <div
      className={`${item ? styleModules.gridItem : ''} ${
        container ? styleModules.container : ''
      } ${direction ? styleModules[direction] : ''}`}
      style={styles}
    >
      {children}
    </div>
  );
};

Grid.propTypes = {
  container: PropTypes.bool,
  direction: PropTypes.oneOf(['row', 'column']),
  justifyContent: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
  alignItems: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
  spacing: PropTypes.number,
  item: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.object,
};

export default Grid;
