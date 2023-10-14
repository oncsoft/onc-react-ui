import React, { memo } from 'react';
const TooltipSvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M8 14c3.313 0 6-2.688 6-6 0-3.313-2.688-6-6-6-3.313 0-6 2.688-6 6 0 3.313 2.688 6 6 6zm.75-9h-1.5C7.11 5 7 4.89 7 4.75V3.5c0-.14.11-.25.25-.25h1.5c.14 0 .25.11.25.25v1.25c0 .14-.11.25-.25.25zm1 7h-3.5c-.14 0-.25-.11-.25-.25V10.5c0-.14.11-.25.25-.25H7v-2.5h-.75c-.14 0-.25-.11-.25-.25V6.25c0-.14.11-.25.25-.25h2.5c.14 0 .25.11.25.25v4h.75c.14 0 .25.11.25.25v1.25c0 .14-.11.25-.25.25z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(TooltipSvg);
