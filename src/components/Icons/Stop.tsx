/* eslint-disable import/newline-after-import */
import React, { memo, forwardRef } from 'react';
const Stop = forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M8 14c3.313 0 6-2.688 6-6 0-3.313-2.687-6-6-6-3.312 0-6 2.687-6 6 0 3.312 2.688 6 6 6zm2.25-3.5h-4.5c-.14 0-.25-.11-.25-.25v-4.5c0-.14.11-.25.25-.25h4.5c.14 0 .25.11.25.25v4.5c0 .14-.11.25-.25.25z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(Stop);
