import React, { memo } from 'react';
const DirectionSvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M11.808 11.147l3.111-2.868A.283.283 0 0015 8.085a.264.264 0 00-.081-.187l-3.111-2.835a.277.277 0 00-.284-.04.247.247 0 00-.154.234v1.815H1.26a.256.256 0 00-.26.26v1.555c0 .146.113.259.26.259h10.11v1.815a.26.26 0 00.438.186z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(DirectionSvg);
