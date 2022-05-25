import * as React from 'react';

function SvgSo(props) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <g fill="#fff">
        <path d="M18.694 16.115h2.231V25H.846v-8.885h2.231v6.664h15.617v-6.664z" />
        <path d="M5.511 15.448l10.952 2.302.467-2.18-10.952-2.303-.467 2.181zm1.44-5.21l10.14 4.706.954-2.02L7.905 8.22l-.954 2.02zm2.82-4.967l8.599 7.128 1.44-1.716-8.6-7.129-1.44 1.717zM15.326 0l-1.805 1.333 6.673 8.946L22 8.946 15.327 0zM5.308 20.557h11.155v-2.221H5.308v2.221z" />
      </g>
    </svg>
  );
}

export default SvgSo;
