import React, { memo } from 'react';
const WarningSvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M13.597 12.46L8.439 3.006a.5.5 0 00-.878 0L2.403 12.46a.5.5 0 00.44.739h10.315a.5.5 0 00.439-.74zM8.643 9.393H7.357V6.854h1.286v2.538zm0 2.116H7.357v-1.27h1.286v1.27z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(WarningSvg);
