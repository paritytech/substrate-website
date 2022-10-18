import React from 'react';

import { useProjectTypes } from '../../../../hooks/use-project-types';

const ListTypes = ({ selectedType, setSelectedType }) => {
  const { projectTypes } = useProjectTypes();

  return (
    <select
      onChange={event => setSelectedType(event.target.value)}
      className="types-filter text-sm dark:bg-darkBackground mr-2 hover:cursor-pointer lg:w-auto md:w-full sm:w-full xs:w-full lg:mb-0 md:mb-4 sm:mb-4 xs:mb-4"
    >
      <option value="all" onClick={event => setSelectedType(event.target.value)}>
        All types
      </option>
      {projectTypes.map((item, index) => {
        return (
          <option
            key={index}
            onClick={event => setSelectedType(event.target.value)}
            value={item.node.frontmatter.slug}
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
