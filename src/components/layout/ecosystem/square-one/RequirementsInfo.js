import React from 'react';

import InfoCard from '../../../ui/InfoCard';

export default function RequirementsInfo({ data }) {
  return (
    <div className="md:flex md:flex-wrap md:justify-around">
      {data
        .sort((a, b) => {
          return a.node.frontmatter.order - b.node.frontmatter.order;
        })
        .map(({ node }, index) => {
          return (
            <InfoCard
              key={index}
              delay={index * 200}
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              link={node.frontmatter.link}
            />
          );
        })}
    </div>
  );
}
