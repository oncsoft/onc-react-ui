import React, { memo } from 'react';
const UploadSvg = React.forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <g fill="currentColor">
      <path d="M8 12.102a.721.721 0 01-.537-.217.75.75 0 01-.213-.547V2.65L4.775 5.172a.67.67 0 01-.525.217.76.76 0 01-.525-.243A.755.755 0 013.5 4.6c0-.213.075-.395.225-.548L7.475.229a.762.762 0 01.25-.178A.722.722 0 018 0c.1 0 .192.017.275.051a.762.762 0 01.25.178L12.3 4.076a.74.74 0 01.225.535.74.74 0 01-.225.535.727.727 0 01-.538.23.727.727 0 01-.537-.23L8.75 2.65v8.688a.75.75 0 01-.213.547.721.721 0 01-.537.217z" />
      <path d="M1.5 16c-.4 0-.75-.153-1.05-.459a1.48 1.48 0 01-.45-1.07v-2.879c0-.22.07-.403.212-.547a.721.721 0 01.538-.217c.217 0 .396.072.538.217a.75.75 0 01.212.547v2.88h13v-2.88c0-.22.07-.403.213-.547a.721.721 0 01.537-.217c.217 0 .396.072.537.217a.75.75 0 01.213.547v2.88c0 .407-.15.764-.45 1.07-.3.305-.65.458-1.05.458h-13z" />
    </g>
  </svg>
));
export default memo(UploadSvg);
