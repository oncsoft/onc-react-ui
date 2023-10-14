import React, { memo } from 'react';
const OfflineSvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M8 14c1.086 0 2.09-.268 3.012-.803a5.925 5.925 0 002.185-2.185A5.894 5.894 0 0014 8c0-1.086-.268-2.09-.803-3.012a5.88 5.88 0 00-2.185-2.18A5.861 5.861 0 008 2c-1.086 0-2.09.268-3.012.803a5.925 5.925 0 00-2.185 2.185A5.894 5.894 0 002 8c0 1.086.268 2.09.803 3.012a5.925 5.925 0 002.185 2.185A5.894 5.894 0 008 14zm0-.844a5.125 5.125 0 01-2.004-.398 5.216 5.216 0 01-1.64-1.113 5.055 5.055 0 01-1.102-1.641A4.999 4.999 0 012.844 8c0-.703.133-1.371.398-2.004a5.216 5.216 0 011.113-1.64 5.055 5.055 0 011.641-1.102c.633-.274 1.3-.41 2.004-.41.703 0 1.371.133 2.004.398a5.216 5.216 0 011.64 1.113 5.055 5.055 0 011.102 1.641c.274.633.41 1.3.41 2.004 0 .703-.133 1.371-.398 2.004a5.216 5.216 0 01-1.113 1.64 5.055 5.055 0 01-1.641 1.102c-.633.274-1.3.41-2.004.41zm2.11-2.625a.407.407 0 00.298-.123.41.41 0 00-.006-.592L8.598 8l1.804-1.816a.38.38 0 00.13-.293.407.407 0 00-.124-.3.407.407 0 00-.299-.122.438.438 0 00-.304.117L8 7.402 6.195 5.586a.438.438 0 00-.304-.117.407.407 0 00-.3.123.407.407 0 00-.122.299.38.38 0 00.129.293L7.402 8 5.598 9.816a.38.38 0 00-.13.293c0 .118.042.217.124.3a.407.407 0 00.299.122c.117 0 .218-.039.304-.117L8 8.598l1.805 1.816a.438.438 0 00.304.117z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(OfflineSvg);