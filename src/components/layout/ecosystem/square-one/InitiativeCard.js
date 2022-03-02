import cx from 'classnames';
import React from 'react';

import { Link } from '../../../default/Link';
import LineArrowButton from '../../../ui/LineArrowButton';

const Tag = ({ title }) => (
  <button
    className={cx(
      'inline-block text-xs mr-4 px-3 py-2 rounded cursor-text',
      'bg-substrateBlue bg-opacity-5 dark:bg-substrateDark',
      'border border-substrateBlue  border-opacity-20 dark:border-substrateWhite'
    )}
  >
    {title}
  </button>
);

export default function InitiativeCard() {
  return (
    <Link to={'#'} data-aos="fade-up" data-aos-delay={0}>
      <div className="p-6 shadow-md transition-transform rounded-md bg-substrateGray-light lg:dark:bg-substrateBlackish hover:scale-105 ">
        <h3 className="mb-0 text-2xl">Web3 Grants</h3>
        <p className="text-sm font-semibold">Web3 Foundation</p>
        <p className="mb-5 overflow-hidden">
          The Web3 Foundation grants program funds software development and research in the field of decentralized
          software protocols. To know more about how to prepare a grant proposal and details about the Web3 Foundation
          Grants Program check out here.
        </p>
        <hr className="border border-substrateGray" />
        <div className="flex flex-wrap mb-6">
          <Tag title="Funding" />
          <Tag title="Education" />
          <Tag title="Development" />
        </div>
        <LineArrowButton>Learn More</LineArrowButton>
      </div>
    </Link>
  );
}
