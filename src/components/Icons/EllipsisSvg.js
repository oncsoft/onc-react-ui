import React, { memo } from 'react';
const EllipsisSvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M3.864 10c.527 0 .954-.448.954-1V7c0-.552-.427-1-.954-1h-1.91C1.429 6 1 6.448 1 7v2c0 .552.428 1 .955 1h1.909zm5.09 0c.528 0 .955-.448.955-1V7c0-.552-.427-1-.954-1h-1.91c-.527 0-.954.448-.954 1v2c0 .552.427 1 .954 1h1.91zm5.091 0c.527 0 .955-.448.955-1V7c0-.552-.428-1-.955-1h-1.909c-.527 0-.954.448-.954 1v2c0 .552.427 1 .954 1h1.91z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(EllipsisSvg);
