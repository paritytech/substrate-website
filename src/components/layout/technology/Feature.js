import React from 'react';

const Feature = ({ title, children, linkText }) => {
  return (
    <>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <div className="border-b-2 border-black dark:border-substrateDarkThemeGrey mb-2">{children}</div>
      <h5 className="font-bold text-lg my-4">{linkText}</h5>
    </>
  );
};

const FeatureImage = ({ children }) => {
  return <div className="flex justify-center h-full lg:px-10">{children}</div>;
};

export { Feature, FeatureImage };
