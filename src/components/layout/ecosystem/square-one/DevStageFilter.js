import cx from 'classnames';
import React from 'react';

export default function DevStageFilter({ currentStage, setCurrentStage }) {
  const developmentStages = ['Ideation', 'Early Stage', 'Prototype Stage', 'MVP'];
  return (
    <select
      className={cx(
        'mb-2 w-full cursor-pointer text-sm',
        'sm:w-auto sm:mr-6 ',
        'dark:bg-darkBackground',
        'focus:outline-none'
      )}
      value={currentStage}
      onChange={event => setCurrentStage(event.target.value)}
    >
      <option value="all">All Development Stages</option>
      {developmentStages.map((stage, index) => (
        <option key={index} value={stage}>
          {stage}
        </option>
      ))}
    </select>
  );
}
