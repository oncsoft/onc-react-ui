/* eslint-disable import/newline-after-import */
import React, { memo } from 'react';
const Start = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M8 14c3.313 0 6-2.688 6-6 0-3.313-2.687-6-6-6-3.312 0-6 2.687-6 6 0 3.312 2.688 6 6 6zm-1.5-3a.564.564 0 01-.25-.063A.508.508 0 016 10.5v-5c0-.18.094-.344.25-.438a.497.497 0 01.5.008L11 7.57c.156.086.25.25.25.43s-.094.344-.25.43l-4.25 2.5a.485.485 0 01-.25.07z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(Start);
