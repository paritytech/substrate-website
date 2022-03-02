import React, { useState } from 'react';

import Section from '../../../layout/Section';
import DevStageFilter from './DevStageFilter';
import InitiativeCard from './InitiativeCard';
import ReqFilter from './ReqFilter';

export default function InitiativeSection({ data }) {
  const [currentStage, setCurrentStage] = useState('all');
  const [currentReq, setCurrentReq] = useState('all');

  return (
    <Section>
      <h2 className="text-4xl mb-8 md:pt-16 font-bold">Initiatives</h2>
      <p className="text-lg">Filter by development stage or requirement</p>
      <div className="mb-8">
        <DevStageFilter currentStage={currentStage} setCurrentStage={setCurrentStage} />
        <ReqFilter currentReq={currentReq} setCurrentReq={setCurrentReq} />
      </div>
      <div className="w-1/1 grid grid-col-1 lg:grid-cols-2 gap-y-6 lg:gap-x-8">
        {data.map((node, index) => {
          const {
            node: { frontmatter },
          } = node;
          return (
            <InitiativeCard
              key={index}
              delay={index * 200}
              title={frontmatter.title}
              description={frontmatter.description}
              org={frontmatter.org}
              link={frontmatter.link}
              requirements={frontmatter.requirements}
            />
          );
        })}
      </div>
    </Section>
  );
}
