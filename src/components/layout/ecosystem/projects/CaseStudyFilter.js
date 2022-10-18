import React from 'react';

const CaseStudyFilter = ({ showCaseStudies, setShowCaseStudies }) => {
  return (
    <div className="flex case-studies dark:bg-darkBackground lg:border py-2 px-3 lg:justify-center justify-start items-center hover:cursor-pointer lg:mb-0 md:mb-4 sm:mb-4 xs:mb-4">
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
