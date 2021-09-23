import React from 'react';

const Blockquote = ({ children }) => {
  return (
    <aside
      data-aos="fade"
      data-aos-delay="100"
      className="border-substrateGreen border-l-8 pl-4 my-8 overflow-x-hidden"
    >
      <div className="font-bold" data-aos="fade-left" data-aos-delay="200" data-aos-duration="350">
        {children}
      </div>
    </aside>
  );
};

export default Blockquote;
