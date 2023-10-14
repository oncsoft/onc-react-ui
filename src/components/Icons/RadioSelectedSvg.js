import React, { memo } from 'react';
const RadioSelectedSvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 1.455a6.545 6.545 0 100 13.09 6.545 6.545 0 000-13.09zm0 2.181a4.364 4.364 0 110 8.728 4.364 4.364 0 010-8.728z"
      fill="#FFF"
      fillRule="evenodd"
    />
  </svg>
));
export default memo(RadioSelectedSvg);
