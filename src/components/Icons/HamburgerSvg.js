import React, { memo } from 'react';
const HamburgerSvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M14 5.344V4H2v1.344h12zm0 3.312V7.344H2v1.312h12zM14 12v-1.344H2V12h12z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(HamburgerSvg);
