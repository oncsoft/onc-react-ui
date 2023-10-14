import React, { memo } from 'react';
const FilterSvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M13.949 2.332c.096.233.056.432-.12.597L9.635 7.131v6.324a.51.51 0 01-.332.502.591.591 0 01-.213.043.505.505 0 01-.383-.162l-2.178-2.182a.525.525 0 01-.162-.383V7.13L2.17 2.929c-.175-.165-.215-.364-.119-.597A.509.509 0 012.553 2h10.894c.238 0 .405.11.502.332z"
      fill="#FFF"
      fillRule="evenodd"
    />
  </svg>
));
export default memo(FilterSvg);
