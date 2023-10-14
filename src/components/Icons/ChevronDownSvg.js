import React, { memo, forwardRef } from 'react';
const ChevronDownSvg = forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M8.352 12.102l5.796-5.79a.505.505 0 000-.71l-1.296-1.29a.495.495 0 00-.704 0L8 8.461 3.852 4.312a.495.495 0 00-.704 0l-1.296 1.29a.505.505 0 000 .71l5.796 5.79a.495.495 0 00.704 0z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(ChevronDownSvg);
