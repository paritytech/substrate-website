import React from 'react';

import Icon from '../default/Icon';

export default function IconTitleText({ delay, icon, title, text }) {
  return (
    <div data-aos="fade-up" data-aos-delay={delay ? delay : 0}>
      <div className="w-68 xl:w-84">
        <div className="inline-flex mb-6">
          <Icon name={icon} className="w-[30px] h-[30px] mr-3 fill-current text-substrateGreen" />
          <h3 className="font-bold text-xl w-72 mb-0">{title}</h3>
        </div>
        <div dangerouslySetInnerHTML={{ __html: text }}></div>
      </div>
    </div>
  );
}
