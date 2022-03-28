import React from 'react';

import InfoCard from '../../../ui/InfoCard';

export default function RequirementsInfo({ data, setCurrentReq }) {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 auto-rows-fr gap-y-14 lg:gap-y-6">
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
              setCurrentReq={setCurrentReq}
            />
          );
        })}
    </div>
  );
}
