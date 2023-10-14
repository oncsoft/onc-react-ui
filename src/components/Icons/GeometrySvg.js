import React, { memo } from 'react';
const GeometrySvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M3 9.667L9.667 3H8.04L3 8.041v1.626zM3.793 13L13 3.782a1.093 1.093 0 00-.296-.492 1.16 1.16 0 00-.51-.29L3 12.205a1.117 1.117 0 00.793.795zm4.166 0L13 7.959V6.333L6.333 13H7.96z"
      fill="#D8D8D8"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(GeometrySvg);
