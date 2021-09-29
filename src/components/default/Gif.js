import React from 'react';

import substratePolkadot from '../../images/gif/substrate-polkadot.gif';
import placeholder from '../../images/svg/placeholder.svg';
import Icon from './Icon';

const gifMap = {
  /* Heroes */
  placeholder,
  'substrate-polkadot': substratePolkadot,
};

const Gif = ({ name, alt, className }) => {
  if (!name) return <span className="w-5"></span>;
  if (!gifMap[name]) return <span className="w-5"></span>;
  if (name === 'placeholder') return <Icon name="placeholder" className={className} />;
  return (
    <div className={'h-0 relative ' + className} style={{ paddingTop: 'calc(360 / 360 * 100%)' }}>
      <img src={gifMap[name]} alt={alt} className="h-auto top-0 left-0 w-full absolute" />
    </div>
  );
};

export default Gif;
