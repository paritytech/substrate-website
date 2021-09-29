import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

export default function Blockqoute({ text, name, image }) {
  const avatar = getImage(image);
  return (
    <div className="bg-substrateGray-light dark:bg-substrateDark p-6 mb-6 rounded">
      <div className="mb-4 text-lg font-bold italic">{text}</div>
      <div className="flex items-center w-full">
        <GatsbyImage className="w-12 h-12 rounded-full mr-4" image={avatar} alt={name} />
        {/* <div className="w-12 h-12 bg-gray-400 rounded-full mr-4"></div> */}
        <div className="text-lg font-bold uppercase w-5/6">{name}</div>
      </div>
    </div>
  );
}
