import React, { memo } from 'react';
const MixerSvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M3.06 14l9.395-9.413L14 6.132V2H9.868l1.545 1.545L2 12.94 3.06 14zm2.838-7.06L6.94 5.898 3.06 2 2 3.06l3.898 3.88zM14 14V9.85l-1.545 1.545-2.353-2.335-1.042 1.042 2.353 2.353L9.868 14H14z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(MixerSvg);
