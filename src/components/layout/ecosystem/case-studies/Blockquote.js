import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

export default function Blockquote({ text, name, image }) {
  return (
    <div className="bg-substrateGray-light dark:bg-substrateDark p-6 mb-6 rounded">
      <div className="mb-4 text-lg font-bold italic">{text}</div>
      <div className="flex items-center w-full">
        {image && <GatsbyImage className="w-12 h-12 rounded-full mr-4" image={getImage(image)} alt={name} />}
        <div className="text-lg font-bold uppercase w-5/6">{name}</div>
      </div>
    </div>
  );
}
