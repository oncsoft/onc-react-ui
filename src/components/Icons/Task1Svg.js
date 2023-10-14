import React, { memo } from 'react';
const Task1Svg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M12.75 14a1.2 1.2 0 00.875-.375A1.2 1.2 0 0014 12.75v-9.5a1.2 1.2 0 00-.375-.875A1.2 1.2 0 0012.75 2h-9.5a1.2 1.2 0 00-.875.375A1.2 1.2 0 002 3.25v9.5c0 .333.125.625.375.875s.542.375.875.375h9.5zM11.5 6h-7V4.5h7V6zm0 2.75h-7v-1.5h7v1.5zm-2 2.75h-5V10h5v1.5z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(Task1Svg);
