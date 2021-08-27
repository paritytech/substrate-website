import React from 'react';

const HighlightBanner = ({ children }) => {
  return (
    <div className="bg-substrateGray-light p-8 mb-20">
      <div className="flex flex-col md:flex-row items-center lg:mx-auto max-w-7xl">
        <div className="bg-gray-200 h-40 w-40 mx-auto md:mr-10 my-8"></div>
        <div className="md:mx-8 md:w-7/12">
          <p className="m-0 p-0 text-xl md:text-2xl font-normal max-w-lg">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default HighlightBanner;
