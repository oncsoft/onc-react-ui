import React, { memo, forwardRef } from 'react';
const ChevronLeftSvg = forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M9.774 13.86l1.224-1.236a.475.475 0 000-.67L7.082 8l3.916-3.954a.475.475 0 000-.67L9.774 2.14a.464.464 0 00-.664 0L3.638 7.665a.475.475 0 000 .67L9.11 13.86c.185.187.48.187.664 0z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(ChevronLeftSvg);
