import React, { memo } from 'react';
const VolumeOffSvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M10.5 12.75c.273 0 .5-.227.5-.5v-8.5c0-.273-.227-.5-.5-.5a.497.497 0 00-.352.148L7.547 6H5.5c-.273 0-.5.227-.5.5v3c0 .273.227.5.5.5h2.047l2.601 2.602a.497.497 0 00.352.148z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(VolumeOffSvg);
