import React, { memo, forwardRef } from 'react';
const CaretUpSvg = forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M2 10.333c0 .365.34.667.75.667h10.5c.41 0 .75-.302.75-.667a.629.629 0 00-.223-.468l-5.25-4.667A.794.794 0 008 5c-.2 0-.387.073-.527.198l-5.25 4.667a.629.629 0 00-.223.468z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(CaretUpSvg);
