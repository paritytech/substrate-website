import React from 'react';

import Accordion from '../../../ui/Accordion';
import IconCard from '../../../ui/IconCard';

export default function GeneralInfo({ data }) {
  return (
    <>
      <div className="lg:hidden">
        {data
          .sort((a, b) => {
            return a.node.frontmatter.order - b.node.frontmatter.order;
          })
          .map(({ node }, index) => (
            <Accordion key={index} title={node.frontmatter.title} text={node.html} />
          ))}
      </div>
      <div className="hidden lg:grid grid-cols-3 gap-6">
        {data
          .sort((a, b) => {
            return a.node.frontmatter.order - b.node.frontmatter.order;
          })
          .map(({ node }, index) => (
            <IconCard
              key={index}
              delay={index * 200}
              title={node.frontmatter.title}
              icon={node.frontmatter.icon}
              text={node.html}
            />
          ))}
      </div>
    </>
  );
}
