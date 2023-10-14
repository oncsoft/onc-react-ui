import React, { memo } from 'react';
const InfoSvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M9.1 4.679a.54.54 0 00.536-.536V2.536A.54.54 0 009.1 2H6.957a.54.54 0 00-.536.536v1.607a.54.54 0 00.536.536H9.1zm1.071 9.107a.54.54 0 00.536-.536v-1.071a.54.54 0 00-.536-.536h-.535V6.82a.54.54 0 00-.536-.535H5.886a.54.54 0 00-.536.535v1.072a.54.54 0 00.536.536h.535v3.214h-.535a.54.54 0 00-.536.536v1.071a.54.54 0 00.536.536h4.285z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(InfoSvg);
