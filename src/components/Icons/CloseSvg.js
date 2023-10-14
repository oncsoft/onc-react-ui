import React, { memo, forwardRef } from 'react';
const CloseSvg = forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M11.047 13c.21 0 .421-.084.573-.236l1.144-1.144a.816.816 0 000-1.145L10.29 8l2.474-2.475a.816.816 0 000-1.145L11.62 3.236a.816.816 0 00-1.145 0L8 5.71 5.525 3.236a.816.816 0 00-1.145 0L3.236 4.38a.816.816 0 000 1.145L5.71 8l-2.474 2.475a.816.816 0 000 1.145l1.144 1.144a.816.816 0 001.145 0L8 10.29l2.475 2.474a.816.816 0 00.572.236z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(CloseSvg);
