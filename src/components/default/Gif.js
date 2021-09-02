import React from 'react';

import adaptable from '../../../src/images/gif/ADAPTABLE.gif';
import compatible from '../../../src/images/gif/COMPATIBLE.gif';
import composable from '../../../src/images/gif/COMPOSABLE.gif';
import efficient1 from '../../../src/images/gif/EFFICIENT-1.gif';
import efficient2 from '../../../src/images/gif/EFFICIENT-2.gif';
import fast from '../../../src/images/gif/FAST.gif';
import forkless from '../../../src/images/gif/FORKLESS.gif';
import heroFlexible from '../../../src/images/gif/HERO-FLEXIBLE.gif';
import heroFutureProof from '../../../src/images/gif/HERO-FUTURE-PROOF.gif';
import heroOpen from '../../../src/images/gif/HERO-OPEN.gif';
import heroTechnology from '../../../src/images/gif/HERO-TECHNOLOGY.gif';
import intentional from '../../../src/images/gif/INTENTIONAL.gif';
import secure from '../../../src/images/gif/SECURE.gif';
import upgradable from '../../../src/images/gif/UPGRADABLE.gif';
import placeholder from '../../images/svg/placeholder.svg';
import Icon from './Icon';

const gifMap = {
  /* Heroes */
  heroTechnology,
  heroFlexible,
  heroOpen,
  heroFutureProof,
  placeholder,
  adaptable,
  compatible,
  composable,
  efficient1,
  efficient2,
  fast,
  forkless,
  intentional,
  secure,
  upgradable,
};

const Gif = ({ name, alt, className }) => {
  if (!name) return <span className="w-5"></span>;
  if (!gifMap[name]) return <span className="w-5"></span>;
  if (name === 'placeholder') return <Icon name="placeholder" className={className} />;
  return (
    <div className={className}>
      <img src={gifMap[name]} alt={alt} />
    </div>
  );
};

export default Gif;
