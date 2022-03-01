import React, { useState } from 'react';

import Section from '../../../layout/Section';
import DevStageFilter from './DevStageFilter';
import ReqFilter from './ReqFilter';

export default function InitiativeSection() {
  const [currentStage, setCurrentStage] = useState('all');
  const [currentReq, setCurrentReq] = useState('all');

  return (
    <Section>
      <h2 className="text-4xl mb-8 md:pt-16 font-bold">Initiatives</h2>
      <p className="text-lg">Filter by development stage or requirement</p>
      <div>
        <DevStageFilter currentStage={currentStage} setCurrentStage={setCurrentStage} />
        <ReqFilter currentReq={currentReq} setCurrentReq={setCurrentReq} />
      </div>
    </Section>
  );
}
