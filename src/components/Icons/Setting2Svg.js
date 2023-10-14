import React, { memo } from 'react';
const Setting2Svg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M10 6V2h1.344v1.344H14v1.312h-2.656V6H10zm4 2.8H7.2V7.6H14v1.2zM4.656 6H6v4H4.656V8.656H2V7.344h2.656V6zm3.884 8H7.2v-4h1.34v1.344H14v1.312H8.54V14zM2 3.6h6.8v1.2H2V3.6zm0 8h4v1.2H2v-1.2z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(Setting2Svg);
