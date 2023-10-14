import React, { memo } from 'react';
const PrintSvg = React.forwardRef((props, svgRef) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1rem"
    height="1rem"
    ref={svgRef}
    {...props}
  >
    <path
      d="M12.8 6.8h-.6c-.1 0-.1.1-.1.1v.6c0 .1.1.1.1.1h.6c.1 0 .1-.1.1-.1v-.6l-.1-.1zm.5-1.6h-1.9V1.9c0-.1-.1-.1-.1-.1H4.7c-.1 0-.1.1-.1.1v3.3H2.7c-.7 0-1.2.6-1.2 1.2v5.1c0 .3.2.5.5.5h2.6v2c0 .1.1.1.1.1h6.6c.1 0 .1-.1.1-.1v-2H14c.3 0 .5-.2.5-.5v-5c0-.7-.6-1.3-1.2-1.3zM5.6 2.9h4.7v2.4H5.6V2.9zm4.8 10.2H5.6V8.9h4.7v4.2zm3-2.1h-2V7.8H4.6V11h-2V6.5c0-.1.1-.2.2-.2h10.5c.1 0 .2.1.2.2V11z"
      fill="#fff"
    />
  </svg>
));
export default memo(PrintSvg);
