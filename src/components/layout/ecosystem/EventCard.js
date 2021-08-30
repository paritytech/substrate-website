import React from 'react';

import Icon from '../../default/Icon';
import Image from '../../default/Image';
import SecondaryButton from '../../ui/SecondaryButton';

const EventCard = ({ event }) => {
  const { title, city, date, prize, description, link, image, alt } = event;

  return (
    <article className="p-4 bg-substrateGray-light rounded-md grid md:grid-cols-2 gap-6 mb-8 shadow-md">
      <Image name={image} alt={alt} className="rounded-md w-full h-auto" />
      <div className="self-center">
        <h4 className="font-extrabold mb-0 text-2xl lg:text-3xl">{city}</h4>
        <h4 className="font-extrabold mb-4 lg:mb-6 text-2xl lg:text-3xl">{title}</h4>
        <p className="mb-2 lg:mb-4">
          <span>
            <Icon name="calendar" className="fill-current text-black inline mr-2 mb-1" />
          </span>
          Date: {date}
        </p>
        <p className="mb-2 lg:mb-4">
          <span>
            <Icon name="star" className="fill-current text-black inline mr-2 mb-1" />
          </span>
          Prize: {prize}
        </p>
        <p>{description}</p>
        <SecondaryButton link={link}>Join us</SecondaryButton>
      </div>
    </article>
  );
};

export default EventCard;
