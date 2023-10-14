import React, { memo, forwardRef } from 'react';
const CheckSvg = forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M6.599 12.5a.76.76 0 00.526-.212l1.053-1.03 5.605-5.485A.727.727 0 0014 5.258a.727.727 0 00-.217-.516l-1.053-1.03a.76.76 0 00-1.053 0L6.6 8.69 4.323 6.455a.76.76 0 00-1.053 0l-1.053 1.03A.727.727 0 002 8c0 .19.077.379.217.515l2.802 2.743 1.053 1.03a.76.76 0 00.527.212z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(CheckSvg);
