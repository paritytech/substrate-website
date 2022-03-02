import cx from 'classnames';
import React from 'react';

export default function ReqFilter({ currentReq, setCurrentReq }) {
  const requirements = [
    'Funding',
    'Education',
    'Mentoring',
    'Tech Mentoring',
    'Tech Guidance',
    'Community Engagement',
    'Development Support',
    'Product Building',
    'Investment Pitching',
  ];
  return (
    <select
      className={cx('mb-2 w-full cursor-pointer text-sm', 'sm:w-auto', 'dark:bg-darkBackground', 'focus:outline-none')}
      value={currentReq}
      onChange={event => setCurrentReq(event.target.value)}
    >
      <option value="all">All Requirements</option>
      {requirements.map((req, index) => (
        <option key={index} value={req}>
          {req}
        </option>
      ))}
    </select>
  );
}
