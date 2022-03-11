import cx from 'classnames';
import React from 'react';

export default function ReqFilter({ data, currentReq, setCurrentReq }) {
  return (
    <select
      className={cx('mb-2 w-full cursor-pointer text-sm', 'sm:w-auto', 'dark:bg-darkBackground', 'focus:outline-none')}
      value={currentReq}
      onChange={event => setCurrentReq(event.target.value)}
    >
      <option value="all">All Requirements</option>
      {data
        .sort((a, b) => {
          if (a.node.frontmatter.title < b.node.frontmatter.title) {
            return -1;
          }
          if (a.node.frontmatter.title > b.node.frontmatter.title) {
            return 1;
          }
          return 0;
        })
        .map(({ node }, index) => (
          <option key={index} value={node.frontmatter.title}>
            {node.frontmatter.title}
          </option>
        ))}
    </select>
  );
}
