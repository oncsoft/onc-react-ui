import React, { memo } from 'react';
const ImportSvg = React.forwardRef((props, svgRef) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1rem"
    height="1rem"
    ref={svgRef}
    {...props}
  >
    <path
      d="M13.9 11.8h-.8c-.1 0-.1.1-.1.2v1H3.1V3.1H13v1c0 .1.1.1.1.1h.8c.1 0 .1-.1.1-.2V2.5c0-.3-.2-.5-.4-.5h-11c-.3 0-.6.2-.6.5v11c0 .3.3.5.5.5h11c.3 0 .5-.2.5-.5V12c0-.1 0-.2-.1-.2zm.2-4.4H9.2V6.2c0-.1-.1-.2-.2-.1L6.8 7.9c-.1 0-.1.1 0 .2L9 9.8c.1.1.2 0 .2-.1V8.6h4.9c.1 0 .1-.1.1-.1v-.9c.1-.1 0-.2-.1-.2z"
      fill="#fff"
    />
  </svg>
));
export default memo(ImportSvg);
