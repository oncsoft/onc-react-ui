import React, { memo, forwardRef } from 'react';
const ChevronUpSvg = forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M3.852 11.687L8 7.54l4.148 4.148a.495.495 0 00.704 0l1.296-1.289a.505.505 0 000-.71l-5.796-5.79a.495.495 0 00-.704 0l-5.796 5.79a.505.505 0 000 .71l1.296 1.29a.495.495 0 00.704 0z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(ChevronUpSvg);
