import React, { memo, forwardRef } from 'react';
const AttachFileSvg = forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M8.4 16c-1.213 0-2.25-.417-3.11-1.25C4.43 13.917 4 12.893 4 11.68v-8.6c0-.853.303-1.58.91-2.18C5.517.3 6.247 0 7.1 0c.867 0 1.6.3 2.2.9.6.6.9 1.333.9 2.2v7.88c0 .507-.173.937-.52 1.29-.347.353-.773.53-1.28.53s-.933-.19-1.28-.57c-.347-.38-.52-.83-.52-1.35V3.44c0-.107.04-.2.12-.28a.384.384 0 01.56 0c.08.08.12.173.12.28v7.5c0 .293.097.543.29.75.193.207.43.31.71.31.28 0 .517-.1.71-.3a1 1 0 00.29-.72v-7.9c0-.64-.223-1.18-.67-1.62C8.283 1.02 7.74.8 7.1.8c-.64 0-1.183.22-1.63.66-.447.44-.67.98-.67 1.62v8.64c0 .973.353 1.797 1.06 2.47.707.673 1.553 1.01 2.54 1.01 1 0 1.85-.34 2.55-1.02.7-.68 1.05-1.513 1.05-2.5V3.44c0-.107.04-.2.12-.28a.384.384 0 01.56 0c.08.08.12.173.12.28v8.22c0 1.213-.43 2.24-1.29 3.08-.86.84-1.897 1.26-3.11 1.26z"
      fill="#D9D9D9"
    />
  </svg>
));
export default memo(AttachFileSvg);
