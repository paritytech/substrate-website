import cx from 'classnames';
import React from 'react';

import { useProjectTypes } from '../../../../hooks/use-project-types';

const ListTypes = ({ selectedType, setSelectedType }) => {
  const { projectTypes } = useProjectTypes();
  const listStyles = 'mb-8 capitalize cursor-pointer hover:text-substrateGreen';
  const handleCLick = event => {
    const dataName = event.target.getAttribute('data-name');
    setSelectedType(dataName);
  };

  return (
    <ul className="list-none mb-5">
      <li>Filter by type:</li>
      <li
        data-name="all"
        onClick={e => handleCLick(e)}
        className={cx(listStyles, 'mt-8', {
          'font-bold text-substrateGreen': selectedType === 'all',
        })}
      >
        All
      </li>
      {projectTypes.map((item, index) => {
        return (
          <li
            key={index}
            onClick={e => handleCLick(e)}
            className={cx(listStyles, {
              'font-bold text-substrateGreen': item.node.frontmatter.slug === selectedType,
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

export default ListTypes;
