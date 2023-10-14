import React, { memo } from 'react';
const ExportSvg = React.forwardRef((props, svgRef) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1rem"
    height="1rem"
    ref={svgRef}
    {...props}
  >
    <path
      d="M13.6 11.7h-.8c-.1 0-.1.1-.1.1v1H2.8V2.9h9.8v1c0 .1.1.1.2.1h.8c.1 0 .1-.1.1-.1V2.3c0-.3-.2-.5-.5-.5h-11c-.3 0-.5.2-.5.5v11c0 .3.2.5.5.5h11c.3 0 .5-.2.5-.5v-1.6h-.1zm.3-4L11.7 6c-.1-.1-.2 0-.2.1v1.2H6.6c-.1 0-.1.1-.1.1v.9c0 .1.1.1.1.1h4.9v1.2c0 .1.1.2.2.1l2.2-1.8s.1-.1 0-.2c0 .1 0 .1 0 0z"
      fill="#fff"
    />
  </svg>
));
export default memo(ExportSvg);
