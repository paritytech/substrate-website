import { format } from 'date-fns';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import Icon from '../../default/Icon';
import SecondaryButton from '../../ui/SecondaryButton';

const hackathonCard = ({ hackathon }) => {
  const formatDate = date => {
    return format(new Date(date), 'dd.MM.yyyy');
  };

  const { title, city, date_start, date_end, prize, featured_image, link } = hackathon.node.frontmatter;
  const html = hackathon.node.html;
  const imageData = getImage(featured_image);

  return (
    <article className="p-4 bg-substrateGray-light dark:bg-substrateBlackish rounded-md grid md:grid-cols-2 gap-6 items-center mb-8 shadow-md">
      {imageData && (
        <GatsbyImage className="w-full h-full aspect-w-1 aspect-h-1 rounded-md" image={imageData} alt={title} />
      )}
      <div>
        <h4 className="font-extrabold mb-0 text-2xl lg:text-3xl">{city}</h4>
        <h4 className="font-extrabold mb-4 lg:mb-6 text-2xl lg:text-3xl">{title}</h4>
        <p className="mb-2 lg:mb-4 font-semibold">
          <span>
            <Icon name="calendar" className="fill-current text-black dark:text-white inline mr-2 mb-1" />
          </span>
          Date: {formatDate(date_start)} - {formatDate(date_end)}
        </p>
        <p className="mb-2 lg:mb-4 font-semibold">
          <span>
            <Icon name="star" className="fill-current text-black dark:text-white inline mr-2 mb-1" />
          </span>
          Prize: {prize}
        </p>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
        <SecondaryButton link={link}>Event info</SecondaryButton>
      </div>
    </article>
  );
};

export default hackathonCard;
