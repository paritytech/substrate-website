import React from 'react';

const Blockquote = ({ children }) => {
  return (
    <aside data-aos="fade-right" data-aos-delay="300" className="border-substrateGreen border-l-8 pl-4 my-8">
      <p className="font-bold">{children}</p>
    </aside>
  );
};

export default Blockquote;
