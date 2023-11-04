import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styleModules from './InfiniteScroll.module.css';
import Spinner from '../Spinner/Spinner';
import { getStyleVariables, useTheme } from '../../utils/theme';
import useInView from '../../hooks/useInView';

const InfiniteScroll = ({
  data = [],
  renderItem,
  itemHeight,
  containerHeight,
  fetchData,
  loadingText = 'Yükleniyor...',
  virtualized = false,
  spinner = true,
  gradient,
}) => {
  const lastItemRef = useRef();
  const theme = useTheme();
  const isIntersecting =
    useInView(lastItemRef, {
      threshold: 0.1,
      rootMargin: '1px',
    }) ?? false;
  const styleVariables = getStyleVariables({ theme });
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(
    Math.floor(containerHeight / itemHeight),
  );

  const containerRef = useRef();

  const visibleData = virtualized ? data.slice(startIndex, endIndex) : data;
  useEffect(() => {
    if (isIntersecting) {
      requestAnimationFrame(loadMoreItems);
    }
  }, [isIntersecting]);

  useEffect(() => {
    handleScroll();
  }, [data, containerHeight, itemHeight]);

  const loadMoreItems = () => {
    fetchData();
  };

  const handleScroll = () => {
    if (containerRef.current && virtualized) {
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

  return (
    <div>
      <div
        ref={containerRef}
        onScroll={handleScroll}
        style={{ height: containerHeight, overflow: 'auto' }}
      >
        <div
          className={`${styleModules.infiniteScrollContainer} ${
            gradient ? styleModules['gradient'] : ''
          }`}
          style={{
            height:
              visibleData.length < containerHeight / itemHeight - 1
                ? containerHeight
                : data.length * itemHeight,
            position: 'relative',
            paddingTop: virtualized ? startIndex * itemHeight : 0,
            ...styleVariables,
          }}
        >
          {visibleData.map((item, index) => (
            <div
              className={`${styleModules.child} ${
                gradient ? styleModules['gradient'] : ''
              }`}
              key={index}
              style={{
                height: itemHeight,
              }}
            >
              {renderItem(item, index)}
            </div>
          ))}

          <div ref={lastItemRef}>
            {spinner && (
              <Spinner
                text={loadingText}
                type="spot"
                style={{ position: 'unset' }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

InfiniteScroll.propTypes = {
  data: PropTypes.array,
  renderItem: PropTypes.func,
  itemHeight: PropTypes.number,
  containerHeight: PropTypes.number,
  fetchData: PropTypes.func,
  loadingText: PropTypes.string,
  virtualized: PropTypes.bool,
  spinner: PropTypes.bool,
  gradient: PropTypes.bool,
};

export default InfiniteScroll;
