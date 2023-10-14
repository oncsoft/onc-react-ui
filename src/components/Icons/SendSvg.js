import React, { memo } from 'react';
const SendSvg = React.forwardRef((props, svgRef) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1rem"
    height="1rem"
    ref={svgRef}
    {...props}
  >
    <path
      d="M3.6 4.6l4.3 1.8-4.3-.5V4.6m4.3 5l-4.3 1.8v-1.3l4.3-.5M2.5 2.9v4L11.1 8 2.5 9.1v4l12-5.1-12-5.1z"
      fill="#fff"
    />
  </svg>
));
export default memo(SendSvg);
