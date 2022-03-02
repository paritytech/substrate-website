import React, { useState } from 'react';

import Section from '../../../layout/Section';
import DevStageFilter from './DevStageFilter';
import InitiativeCard from './InitiativeCard';
import ReqFilter from './ReqFilter';

export default function InitiativeSection() {
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
      <div className="w-1/1 grid md:grid-cols-2 gap-y-6 md:gap-x-8">
        <InitiativeCard />
        <InitiativeCard />
        <InitiativeCard />
      </div>
    </Section>
  );
}
