import React, { memo, forwardRef } from 'react';
const CaretDownSvg = forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M14 6.167c0-.365-.34-.667-.75-.667H2.75c-.41 0-.75.302-.75.667 0 .177.082.343.223.468l5.25 4.667c.14.125.328.198.527.198.2 0 .387-.073.527-.198l5.25-4.667A.629.629 0 0014 6.167z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(CaretDownSvg);
