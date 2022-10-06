import cx from 'classnames';
import React from 'react';

import { useProjectTypes } from '../../../../hooks/use-project-types';

const ListTypes = ({ selectedType, setSelectedType }) => {
  const { projectTypes } = useProjectTypes();
  const listStyles = 'mb-8 capitalize cursor-pointer hover:text-substrateGreen';

  return (
    <select
      onChange={event => setSelectedType(event.target.value)}
      className="types-filter text-sm dark:bg-darkBackground mr-2 hover:cursor-pointer"
    >
      <li>Filter by type:</li>
      <option
        value="all"
        onClick={event => setSelectedType(event.target.value)}
        className={cx(listStyles, '', {
          'font-bold text-substrateGreen': selectedType === 'all',
        })}
      >
        All
      </option>
      {projectTypes.map((item, index) => {
        return (
          <option
            key={index}
            onClick={event => setSelectedType(event.target.value)}
            value={item.node.frontmatter.slug}
            className={cx(
              'w-1/4 h-11 relative font-bold text-sm flex justify-center items-center hover:bg-substrateDark hover:text-white cursor-pointer transform transition-colors duration-150 ease-in-out ',
              { 'rounded-tl rounded-bl': index === 0 },
              { 'rounded-br rounded-tr': index === 3 },
              { 'bg-substrateDark text-white': selectedType === item.node.frontmatter.slug }
            )}
            data-name={item.node.frontmatter.slug}
            selected={selectedType === item.node.frontmatter.slug}
          >
            {item.node.frontmatter.title}
          </option>
        );
      })}
    </select>
  );
};

export default ListTypes;
