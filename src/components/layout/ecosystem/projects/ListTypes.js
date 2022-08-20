import React from 'react';

import { useProjectTypes } from '../../../../hooks/use-project-types';

const ListTypes = () => {
  const { projectTypes } = useProjectTypes();

  return projectTypes.map((item, index) => {
    return (
      <div key={index} className={item.node.frontmatter.slug}>
        {item.node.frontmatter.title}
      </div>
    );
  });
};

export default ListTypes;
