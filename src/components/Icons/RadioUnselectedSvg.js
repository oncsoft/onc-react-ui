import React, { memo } from 'react';
const RadioUnselectedSvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M8 16A8 8 0 108 0a8 8 0 000 16zm0-1.455a6.545 6.545 0 110-13.09 6.545 6.545 0 010 13.09z"
      fill="#FFF"
      fillRule="evenodd"
    />
  </svg>
));
export default memo(RadioUnselectedSvg);
