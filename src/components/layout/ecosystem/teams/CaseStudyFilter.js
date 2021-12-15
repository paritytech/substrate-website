import React from 'react';

const CaseStudyFilter = ({ showCaseStudies, setShowCaseStudies }) => {
  return (
    <div className="flex case-studies mb-2">
      <p className="inline pr-3 cursor-pointer mb-0" onClick={() => setShowCaseStudies(!showCaseStudies)}>
        Show only Case Studies
      </p>
      <input
        type="checkbox"
        id="case-studies"
        value={showCaseStudies}
        checked={showCaseStudies}
        onChange={() => setShowCaseStudies(!showCaseStudies)}
      />
      <label htmlFor="case-studies"></label>
    </div>
  );
};

export default CaseStudyFilter;
