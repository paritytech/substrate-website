import React from 'react';

import { useProjectCategories } from '../../../../hooks/use-project-categories';

const ListCategories = () => {
  const { projectCategories } = useProjectCategories();

  return projectCategories.map((item, index) => {
    return (
      <div key={index} className={item.node.frontmatter.slug}>
        {item.node.frontmatter.title}
      </div>
    );
  });
};

export default ListCategories;
