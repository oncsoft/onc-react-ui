import React, { memo } from 'react';
const SortSvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M2 10.5V8.82h12v1.68H2zm12-5v1.68H2V5.5h12z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(SortSvg);
