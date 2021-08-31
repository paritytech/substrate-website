import cx from 'classnames';
import React from 'react';

import Icon from '../default/Icon';
import { Link } from '../default/Link';

const PrimaryButton = ({ children, link, fullWidth = false }) => {
  return (
    <Link to={link}>
      <div
        className={cx('group bg-substrateGreen inline-flex relative rounded-md overflow-hidden', {
          'w-full justify-center': fullWidth,
        })}
      >
        <p className="text-bold text-white mb-0 mx-6 py-3 group-hover:ml-4 group-hover:mr-8 transition-all">
          {children}
        </p>
        <div className="bg-substrateGreen-dark absolute flex px-1 -right-5 h-full group-hover:-translate-x-5 transition-transform fill-current text-white">
          <Icon name="arrow-more" className="self-center" />
        </div>
      </div>
    </Link>
  );
};

export default PrimaryButton;
