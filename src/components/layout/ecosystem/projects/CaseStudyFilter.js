import React from 'react';

const CaseStudyFilter = ({ showCaseStudies, setShowCaseStudies }) => {
  return (
    <div className="flex case-studies dark:bg-darkBackground border py-2 px-3 justify-center items-center hover:cursor-pointer">
      <p className="inline pr-3 cursor-pointer mb-0 text-sm" onClick={() => setShowCaseStudies(!showCaseStudies)}>
        Case Studies only
      </p>
      <input
        type="checkbox"
        id="case-studies"
        className="!mt-0"
        value={showCaseStudies}
        checked={showCaseStudies}
        onChange={() => setShowCaseStudies(!showCaseStudies)}
      />
      <label htmlFor="case-studies"></label>
    </div>
  );
};

export default CaseStudyFilter;
