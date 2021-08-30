import React from 'react';

import Icon from '../../default/Icon';
import SecondaryButton from '../../ui/SecondaryButton';

const EventCard = ({ event }) => {
  const { title, city, date, prize, description, link } = event;

  return (
    <article className="p-4 bg-substrateGray-light rounded-md grid grid-cols-2 gap-6 mb-8 shadow-md">
      <Icon name="placeholder" className="w-full h-auto" />
      <div className="self-center">
        <h4 className="font-extrabold mb-0 text-2xl">{city}</h4>
        <h4 className="font-extrabold mb-4 text-2xl">{title}</h4>
        <p className="mb-2">
          <span>
            <Icon name="calendar" className="fill-current text-black inline mr-2 mb-1" />
          </span>
          Date: {date}
        </p>
        <p className="mb-2">
          <span>
            <Icon name="star" className="fill-current text-black inline mr-2 mb-1" />
          </span>
          Prize: {prize}
        </p>
        <p>{description}</p>
        <SecondaryButton link={link} text="Join us" />
      </div>
    </article>
  );
};

export default EventCard;
