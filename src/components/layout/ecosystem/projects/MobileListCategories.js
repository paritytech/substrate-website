import React from 'react';

import { useProjectCategories } from '../../../../hooks/use-project-categories';

const MobileListCategories = ({ selectedCategory, setSelectedCategory }) => {
  const { projectCategories } = useProjectCategories();

  return (
    <select
      onChange={event => setSelectedCategory(event.target.value)}
      className="types-filter text-sm dark:bg-darkBackground mr-2 hover:cursor-pointer lg:hidden md:w-full sm:w-full xs:w-full lg:mb-0 md:mb-4 sm:mb-4 xs:mb-4"
    >
      <option value="all" onClick={event => setSelectedCategory(event.target.value)}>
        All categories
      </option>
      {projectCategories.map((item, index) => {
        return (
          <option
            key={index}
            onClick={event => setSelectedCategory(event.target.value)}
            value={item.node.frontmatter.slug}
            data-name={item.node.frontmatter.slug}
            selected={selectedCategory === item.node.frontmatter.slug}
          >
            {item.node.frontmatter.title}
          </option>
        );
      })}
    </select>
  );
};

export default MobileListCategories;
