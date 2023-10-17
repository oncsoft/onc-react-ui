import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styleModules from './InfiniteScroll.module.css';
import { throttleEvent } from '../../utils/eventHelper';
import Spinner from '../Spinner/Spinner';
import { useTheme } from '../../utils/theme';

const InfiniteScroll = ({
  data = [],
  renderItem,
  itemHeight,
  containerHeight,
  threshold,
  fetchData,
}) => {
  const lastItemRef = useRef();
  const theme = useTheme();
  const styleVariables = {
    '--secondaryColor': theme.secondaryColor,
  };
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = throttleEvent(() => {
      if (!loading && isLastItemVisible()) {
        loadMoreItems();
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  const isLastItemVisible = () => {
    const lastItemElement = lastItemRef.current;
    if (!lastItemElement) return false;

    const rect = lastItemElement.getBoundingClientRect();
    const distanceToBottom = rect.top;

    return distanceToBottom <= containerHeight + threshold;
  };

  const loadMoreItems = () => {
    setLoading(true);

    fetchData().then(() => {
      setLoading(false);
    });
  };

  return (
    <div>
      <div style={{ height: containerHeight }}>
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
  threshold: PropTypes.number,
  fetchData: PropTypes.func,
};

export default InfiniteScroll;
