import React, { memo } from 'react';
const HiddenSvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <circle fill="#FFF" cx={8} cy={8} r={2} fillRule="evenodd" />
  </svg>
));
export default memo(HiddenSvg);
