import React, { useEffect, useState } from 'react';

import DevStageFilter from './DevStageFilter';
import InitiativeCard from './InitiativeCard';
import ReqFilter from './ReqFilter';

export default function InitiativeSection({
  data,
  reqFilterData,
  currentReq,
  setCurrentReq,
  currentStage,
  setCurrentStage,
}) {
  const [displayedData, setDisplayedData] = useState([]);

  useEffect(() => {
    const filteredData = data
      .filter(({ node }) => {
        if (currentStage === 'all') {
          return node;
        } else {
          return node.frontmatter.devStage.includes(currentStage);
        }
      })
      .filter(({ node }) => {
        if (currentReq === 'all') {
          return node;
        } else {
          return node.frontmatter.requirements.includes(currentReq);
        }
      });
    setDisplayedData(filteredData);
  }, [currentStage, currentReq]);

  return (
    <>
      <h2 className="text-4xl mb-8 md:pt-16 font-bold">Initiatives</h2>
      <p className="text-lg">Filter by development stage or requirement</p>
      <div className="mb-8">
        <DevStageFilter currentStage={currentStage} setCurrentStage={setCurrentStage} />
        <ReqFilter data={reqFilterData} currentReq={currentReq} setCurrentReq={setCurrentReq} />
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
    </>
  );
}
