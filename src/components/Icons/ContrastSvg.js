import React, { memo, forwardRef } from 'react';
const ContrastSvg = forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M8 14c1.66 0 3.076-.585 4.246-1.754C13.416 11.076 14 9.66 14 8c0-1.66-.585-3.076-1.754-4.246C11.076 2.584 9.66 2 8 2c-1.66 0-3.08.59-4.259 1.768C2.581 4.928 2 6.339 2 8c0 1.66.585 3.076 1.754 4.246C4.924 13.416 6.34 14 8 14zm0-.857V2.857c1.429 0 2.643.5 3.643 1.5s1.5 2.214 1.5 3.643c0 1.429-.5 2.643-1.5 3.643s-2.214 1.5-3.643 1.5z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(ContrastSvg);
