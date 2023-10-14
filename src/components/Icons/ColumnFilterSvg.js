import React, { memo, forwardRef } from 'react';
const ColumnFilterSvg = forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <g fill="#D9D9D9" fillRule="nonzero">
      <path d="M4.691 1.677L2.13 4.27.85 2.973 0 3.836 2.129 6 5.54 2.54zM13.922 11.131h1.385v.351h-.692v.703h.692v.35h-1.385v.703H16v-2.81h-2.078zM14.615 4.81h.692V2h-1.385v.702h.693zM13.922 6.917h1.247l-1.247 1.475v.632H16v-.702h-1.247L16 6.846v-.632h-2.078zM7 3h6v1.405H7zM3 11h10v1.405H3zM3 7h9.697v1.405H3z" />
    </g>
  </svg>
));
export default memo(ColumnFilterSvg);
