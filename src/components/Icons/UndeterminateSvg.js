import React, { memo } from 'react';
const UndeterminateSvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <rect
      fill="#FFF"
      x={2}
      y={6}
      width={12}
      height={4}
      rx={1}
      fillRule="evenodd"
    />
  </svg>
));
export default memo(UndeterminateSvg);
