import React, { memo } from 'react';
const SearchSvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M13.077 14a.93.93 0 00.923-.923.929.929 0 00-.267-.65L11.26 9.955A5.075 5.075 0 007.077 2 5.075 5.075 0 002 7.077a5.075 5.075 0 007.954 4.183l2.474 2.466a.905.905 0 00.649.274zm-6-3.692a3.235 3.235 0 01-3.23-3.231c0-1.781 1.449-3.23 3.23-3.23s3.23 1.449 3.23 3.23-1.449 3.23-3.23 3.23z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(SearchSvg);
