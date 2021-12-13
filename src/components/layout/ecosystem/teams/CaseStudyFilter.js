import React from 'react';

const CaseStudyFilter = ({ showCaseStudies, setShowCaseStudies }) => {
  return (
    <div className="lg:text-right mb-6 lg:-mb-6">
      <label htmlFor="case-studies">Show only Case Studies</label>
      <input
        className="rounded-sm ml-2 mb-0.5"
        type="checkbox"
        id="case-studies"
        value={showCaseStudies}
        checked={showCaseStudies}
        onChange={() => setShowCaseStudies(!showCaseStudies)}
      />
    </div>
  );
};

export default CaseStudyFilter;
