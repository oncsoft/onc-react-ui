// InfiniteTable.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';
import './InfiniteTable.css';

const InfiniteTable = ({
  data = [],
  columns = [],
  fetchData,
  itemHeight = 50,
  containerHeight = 300,
  loadingText = 'Loading...',
  virtualized = true,
  spinner = true,
}) => {
  const [columnRefs, setColumnRefs] = useState([]);

  useEffect(() => {
    if (columns.length > 0 && data.length > 0) {
      const refs = columns.map(() => data.map(() => React.createRef()));
      setColumnRefs(refs);
    }
  }, [columns, data]);

  const renderItem = (item, rowIndex) => {
    const itemRefs = columns.map(() => React.createRef());

    return (
      <div className="table-row">
        {columns.map((column, columnIndex) => {
          const ref = itemRefs[columnIndex];
          columnRefs.length && (columnRefs[columnIndex][rowIndex] = ref);

          return (
            <div
              key={columnIndex}
              className="table-cell"
              title={item[column.key]}
              ref={ref}
            >
              <span>{item[column.key]}</span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="table-container">
      <div className="table-header">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="table-cell">
            {column.header}
          </div>
        ))}
      </div>
      {data.length > 0 && (
        <InfiniteScroll
          data={data}
          renderItem={renderItem}
          itemHeight={itemHeight}
          containerHeight={containerHeight}
          fetchData={fetchData}
          loadingText={loadingText}
          virtualized={virtualized}
          spinner={spinner}
        />
      )}
    </div>
  );
};

InfiniteTable.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  fetchData: PropTypes.func,
  itemHeight: PropTypes.number,
  containerHeight: PropTypes.number,
  loadingText: PropTypes.string,
  virtualized: PropTypes.bool,
  spinner: PropTypes.bool,
};

export default InfiniteTable;