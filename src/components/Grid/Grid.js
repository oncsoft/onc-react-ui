import React, { useLayoutEffect, useRef } from 'react';
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
  mbt,
  className,
}) => {
  const styles = {
    '--spacing': spacing ?? 0,
    '--justifyContent': justifyContent,
    '--alignItems': alignItems,
    '--item': item,
    ...style,
  };
  const gridRef = useRef();

  useLayoutEffect(() => {
    const parent = gridRef.current?.closest('.' + styleModules.container);
    if (parent && parent.getAttribute('type') === 'column' && item) {
      const width = (100 * item) / 12 + '%';
      gridRef.current.style.minWidth = width;
      gridRef.current.style.maxWidth = width;
      gridRef.current.style.flexGrow = item;
    }
  }, []);

  return (
    <div
      ref={gridRef}
      className={`${item ? styleModules.gridItem : ''} ${
        container ? styleModules.container : ''
      } ${direction ? styleModules[direction] : ''} ${className} ${
        mbt ? styleModules.mbt : ''
      } ${className}`}
      style={styles}
      type={direction}
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
  className: PropTypes.string,
  mbt: PropTypes.bool,
};

export default Grid;
