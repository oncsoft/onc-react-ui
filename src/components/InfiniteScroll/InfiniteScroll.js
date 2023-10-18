import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styleModules from './InfiniteScroll.module.css';
import Spinner from '../Spinner/Spinner';
import { useTheme } from '../../utils/theme';
import { useInView } from '../../hooks/useInView';

const InfiniteScroll = ({
  data = [],
  renderItem,
  itemHeight,
  containerHeight,
  fetchData,
}) => {
  const lastItemRef = useRef();
  const theme = useTheme();
  const isIntersecting =
    useInView(lastItemRef, {
      threshold: 0.1,
      rootMargin: '1px',
    }) ?? false;
  const styleVariables = {
    '--secondaryColor': theme.secondaryColor,
  };

  useEffect(() => {
    if (isIntersecting) {
      requestAnimationFrame(loadMoreItems);
    }
  }, [isIntersecting]);

  const loadMoreItems = () => {
    fetchData();
  };

  return (
    <div>
      <div style={{ height: containerHeight, overflow: 'auto' }}>
        <div
          className={styleModules.infiniteScrollContainer}
          style={{
            height: data.length * itemHeight,
            position: 'relative',
            ...styleVariables,
          }}
        >
          {data.map((item, index) => (
            <div
              className={styleModules.child}
              key={index}
              style={{ height: itemHeight }}
            >
              {renderItem(item)}
            </div>
          ))}

          <div ref={lastItemRef}>
            <Spinner
              text="Yükleniyor"
              type="spot"
              style={{ position: 'unset' }}
            />
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
};

export default InfiniteScroll;
