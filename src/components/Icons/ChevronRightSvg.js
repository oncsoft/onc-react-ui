import React, { memo, forwardRef } from 'react';
const ChevronRightSvg = forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M6.362 13.86l-1.224-1.236a.475.475 0 010-.67L9.054 8 5.138 4.046a.475.475 0 010-.67L6.362 2.14a.464.464 0 01.664 0l5.472 5.525a.475.475 0 010 .67L7.026 13.86a.464.464 0 01-.664 0z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(ChevronRightSvg);
