import React from 'react';

import hackathon1 from '../../../../media/images/hackathons/hackathons-1.jpg';
import hackathon2 from '../../../../media/images/hackathons/hackathons-2.png';
import Icon from '../../default/Icon';
import SecondaryButton from '../../ui/SecondaryButton';

const imageMap = {
  hackathon1,
  hackathon2,
};

const EventCard = ({ event }) => {
  const { title, city, date, prize, description, image, link, alt } = event;

  return (
    <article className="p-4 bg-substrateGray-light rounded-md grid md:grid-cols-2 gap-6 items-center mb-8 shadow-md">
      <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
        <img
          src={imageMap[image]}
          alt={alt}
          className="w-full h-full object-center object-cover lg:w-full and lg:h-full"
        />
      </div>
      <div>
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
