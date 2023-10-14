import React, { memo, forwardRef } from 'react';
const CaretLeftSvg = forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M10.333 14c.365 0 .667-.34.667-.75V2.75c0-.41-.302-.75-.667-.75a.629.629 0 00-.468.223l-4.667 5.25A.794.794 0 005 8c0 .2.073.387.198.527l4.667 5.25c.125.141.291.223.468.223z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(CaretLeftSvg);
