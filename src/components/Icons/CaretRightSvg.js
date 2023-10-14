import React, { memo, forwardRef } from 'react';
const CaretRightSvg = forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M5.667 14a.629.629 0 00.468-.223l4.667-5.25A.794.794 0 0011 8c0-.2-.073-.387-.198-.527l-4.667-5.25A.629.629 0 005.667 2C5.302 2 5 2.34 5 2.75v10.5c0 .41.302.75.667.75z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(CaretRightSvg);
