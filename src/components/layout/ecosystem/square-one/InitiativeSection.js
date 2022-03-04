import React, { useEffect, useState } from 'react';

import Section from '../../../layout/Section';
import DevStageFilter from './DevStageFilter';
import InitiativeCard from './InitiativeCard';
import ReqFilter from './ReqFilter';

export default function InitiativeSection({ data }) {
  const [currentStage, setCurrentStage] = useState('all');
  const [currentReq, setCurrentReq] = useState('all');
  const [displayedData, setDisplayedData] = useState([]);

  useEffect(() => {
    if (currentReq !== 'all') {
      const filteredData = data.filter(({ node }) => node.frontmatter.requirements.includes(currentReq));
      setDisplayedData(filteredData);
    } else {
      setDisplayedData(data);
    }
  }, [currentReq]);

  return (
    <Section>
      <h2 className="text-4xl mb-8 md:pt-16 font-bold">Initiatives</h2>
      <p className="text-lg">Filter by development stage or requirement</p>
      <div className="mb-8">
        <DevStageFilter currentStage={currentStage} setCurrentStage={setCurrentStage} />
        <ReqFilter currentReq={currentReq} setCurrentReq={setCurrentReq} />
      </div>
      <div className="w-1/1 grid grid-col-1 lg:grid-cols-2 gap-y-8 lg:gap-x-8">
        {displayedData.map((node, index) => {
          const {
            node: { frontmatter },
          } = node;
          return (
            <InitiativeCard
              key={index}
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
