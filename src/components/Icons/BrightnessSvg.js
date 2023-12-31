/* eslint-disable import/newline-after-import */
import React, { memo, forwardRef } from 'react';
const BrightnessSvg = forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M8 13.207c.27 0 .49.22.49.49v.813a.49.49 0 11-.98 0v-.813c0-.27.22-.49.49-.49zm4.376-1.525l.574.574a.49.49 0 11-.693.694l-.575-.575a.49.49 0 11.694-.693zm-8.058 0a.49.49 0 010 .693l-.574.575a.489.489 0 01-.694 0 .49.49 0 010-.694l.575-.574a.49.49 0 01.693 0zM8 3.828a4.172 4.172 0 110 8.344 4.172 4.172 0 010-8.344zm0 1.69a2.483 2.483 0 100 4.965zm6.51 1.992a.49.49 0 110 .98h-.813a.49.49 0 110-.98h.813zm-12.207 0a.49.49 0 110 .98H1.49a.49.49 0 110-.98h.813zM12.95 3.05a.49.49 0 010 .693l-.574.575a.489.489 0 01-.694 0 .49.49 0 010-.694l.575-.574a.49.49 0 01.693 0zm-9.206 0l.574.574a.49.49 0 11-.693.694l-.575-.575a.49.49 0 11.694-.693zM8 1c.27 0 .49.22.49.49v.813a.49.49 0 11-.98 0V1.49c0-.27.22-.49.49-.49z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(BrightnessSvg);
