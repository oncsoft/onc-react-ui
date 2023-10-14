/* eslint-disable */
import React, { memo } from 'react';
const AddSvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M8.818 14a.818.818 0 00.818-.818V9.636h3.546A.818.818 0 0014 8.818V7.182a.818.818 0 00-.818-.818H9.636V2.818A.818.818 0 008.818 2H7.182a.818.818 0 00-.818.818v3.546H2.818A.818.818 0 002 7.182v1.636c0 .452.366.818.818.818h3.546v3.546c0 .452.366.818.818.818h1.636z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(AddSvg);
