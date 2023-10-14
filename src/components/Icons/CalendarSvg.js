import React, { memo, forwardRef } from 'react';
const CalendarSvg = forwardRef((props, svgRef) => (
  <svg
    width="1rem"
    height="1rem"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={svgRef}
    {...props}
  >
    <path
      d="M3.346 13.143H5.25v-1.929H3.346v1.929zm2.327 0h2.115v-1.929H5.673v1.929zm-2.327-2.357H5.25V8.643H3.346v2.143zm2.327 0h2.115V8.643H5.673v2.143zM3.346 8.214H5.25V6.286H3.346v1.928zm4.866 4.929h2.115v-1.929H8.212v1.929zM5.673 8.214h2.115V6.286H5.673v1.928zm5.077 4.929h1.904v-1.929H10.75v1.929zm-2.538-2.357h2.115V8.643H8.212v2.143zM5.885 5V3.071a.207.207 0 00-.063-.15.202.202 0 00-.149-.064H5.25a.202.202 0 00-.149.064.207.207 0 00-.063.15V5c0 .058.021.108.063.15a.202.202 0 00.149.064h.423a.202.202 0 00.149-.063A.207.207 0 005.885 5zm4.865 5.786h1.904V8.643H10.75v2.143zM8.212 8.214h2.115V6.286H8.212v1.928zm2.538 0h1.904V6.286H10.75v1.928zM10.962 5V3.071a.207.207 0 00-.063-.15.202.202 0 00-.149-.064h-.423a.202.202 0 00-.149.064.207.207 0 00-.063.15V5c0 .058.021.108.063.15a.202.202 0 00.149.064h.423a.202.202 0 00.149-.063.207.207 0 00.063-.151zm2.538-.429v8.572a.829.829 0 01-.251.603.808.808 0 01-.595.254H3.346a.808.808 0 01-.595-.254.829.829 0 01-.251-.603V4.57c0-.232.084-.433.251-.602a.808.808 0 01.595-.255h.846v-.643c0-.294.104-.546.311-.756.207-.21.456-.315.747-.315h.423c.29 0 .54.105.747.315.207.21.31.462.31.756v.643h2.54v-.643c0-.294.103-.546.31-.756.207-.21.456-.315.747-.315h.423c.29 0 .54.105.747.315.207.21.31.462.31.756v.643h.847c.229 0 .427.085.595.255.167.17.251.37.251.602z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
));
export default memo(CalendarSvg);
