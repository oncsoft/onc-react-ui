import React, { useEffect, useRef, useState } from 'react';
import styleModules from './VirtualList.module.css';
import PropTypes from 'prop-types';
import { useTheme } from '../../utils/theme';

const VirtualList = ({
  data,
  itemHeight,
  containerHeight,
  type = 'primary',
}) => {
  const theme = useTheme();
  const constColor =
    type === 'primary' ? theme.secondaryColor : theme.primaryColor;

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);

  const containerRef = useRef();

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop } = containerRef.current;
      setStartIndex(Math.floor(scrollTop / itemHeight));
      setEndIndex(
        Math.min(
          data.length,
          startIndex + Math.ceil(containerHeight / itemHeight),
        ),
      );
    }
  };

  useEffect(() => {
    handleScroll();
  }, [data, containerHeight, itemHeight]);

  const visibleData = data.slice(startIndex, endIndex);
  const styleVariables = {
    '--primaryColor': theme[`${type + 'Color'}`],
    '--secondaryColor': constColor,
    '--containerHeight': containerHeight + 'px',
    '--contentHeight':
      (visibleData.length < containerHeight / itemHeight - 1
        ? containerHeight
        : data.length * itemHeight) + 'px',
    '--itemHeight': itemHeight + 'px',
  };

  return (
    <div
      ref={containerRef}
      className={`${styleModules.virtualListContainer}`}
      style={styleVariables}
      onScroll={handleScroll}
    >
      <div
        className={`${styleModules.content}`}
        style={{ paddingTop: startIndex * itemHeight, ...styleVariables }}
      >
        {visibleData.map((item, index) => (
          <div
            key={'virtualList' + index}
            className={`${styleModules.item}`}
            style={styleVariables}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

VirtualList.propTypes = {
  data: PropTypes.array,
  itemHeight: PropTypes.number,
  containerHeight: PropTypes.number,
  type: PropTypes.oneOf(['primary', 'secondary']),
};

export default VirtualList;
