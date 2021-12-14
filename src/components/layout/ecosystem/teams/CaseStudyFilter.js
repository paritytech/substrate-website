import React from 'react';

const CaseStudyFilter = ({ showCaseStudies, setShowCaseStudies }) => {
  return (
    <div className="flex w-full lg:justify-end lg:-mb-14 case-studies">
      <p className="inline mr-3 cursor-pointer" onClick={() => setShowCaseStudies(!showCaseStudies)}>
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
