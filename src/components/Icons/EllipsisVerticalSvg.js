import React, { memo } from 'react';
const EllipsisVerticalSvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M6 3.864c0 .527.448.954 1 .954h2c.552 0 1-.427 1-.954v-1.91C10 1.429 9.552 1 9 1H7c-.552 0-1 .428-1 .955v1.909zm0 5.09c0 .528.448.955 1 .955h2c.552 0 1-.427 1-.954v-1.91c0-.527-.448-.954-1-.954H7c-.552 0-1 .427-1 .954v1.91zm0 5.091c0 .527.448.955 1 .955h2c.552 0 1-.428 1-.955v-1.909c0-.527-.448-.954-1-.954H7c-.552 0-1 .427-1 .954v1.91z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(EllipsisVerticalSvg);
