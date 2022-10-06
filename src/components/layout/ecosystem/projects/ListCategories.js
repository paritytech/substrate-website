import cx from 'classnames';
import React from 'react';

import { useProjectCategories } from '../../../../hooks/use-project-categories';

const ListCategories = ({ setSelectedCategory, selectedCategory }) => {
  const { projectCategories } = useProjectCategories();
  const listStyles = 'mb-8 capitalize cursor-pointer hover:text-substrateGreen';
  const handleCLick = event => {
    const dataName = event.target.getAttribute('data-name');
    setSelectedCategory(dataName);
  };

  return (
    <ul className="list-none mb-5">
      <li>
        <b className="border-b pb-2">Filter by category</b>
      </li>
      <li
        data-name="all"
        onClick={e => handleCLick(e)}
        className={cx(listStyles, 'mt-8', {
          'font-bold text-substrateGreen': selectedCategory === 'all',
        })}
      >
        All
      </li>
      {projectCategories.map((item, index) => {
        return (
          <li
            key={index}
            onClick={e => handleCLick(e)}
            className={cx(listStyles, {
              'font-bold text-substrateGreen': item.node.frontmatter.slug === selectedCategory,
            })}
            data-name={item.node.frontmatter.slug}
          >
            {item.node.frontmatter.title}
          </li>
        );
      })}
    </ul>
  );
};

export default ListCategories;
