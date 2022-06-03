import cx from 'classnames';
import React from 'react';

import Icon from '../../default/Icon';
import { Link } from '../../default/Link';
import SecondaryButton from '../../ui/SecondaryButton';

const TutorialCard = ({ tutorial }) => {
  const { link, title, description, image, difficulty, time } = tutorial;

  return (
    <div className="bg-substrateGray-light dark:bg-substrateBlackish rounded-md max-w-md overflow-hidden h-full flex flex-col justify-between">
      <div>
        <Link to={link}>
          <div className="overflow-hidden">
            <img
              src={image}
              alt={title}
              className="overflow-hidden w-full h-28 md:h-60 object-cover hover:scale-110 transition-transform"
            />
          </div>
        </Link>
        <div className="p-6 pb-0">
          <Link to={link}>
            <h4 className="text-2xl mb-6">{title}</h4>
          </Link>
          <p className="text-base mb-0">{description}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap justify-between items-center mb-2">
          <div className="flex">
            <p className="mb-0 text-sm uppercase tracking-wider">
              {difficulty === 1 ? 'Beginner' : difficulty === 2 ? 'Intermediate' : difficulty === 3 && 'Advanced'}
            </p>
            <div className="flex ml-1 mt-1">
              {[...Array(3)].map((_, idx) => (
                <span
                  key={idx}
                  className={cx('mx-1 inline-block w-3 h-3 bg-substrateDark dark:bg-substrateGray rounded-full', {
                    'bg-opacity-10 dark:bg-opacity-20': difficulty <= idx,
                  })}
                ></span>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <Icon name="time" />
            <span>{time}</span>
          </div>
        </div>
        <hr />

        <SecondaryButton link={link}>Try it now!</SecondaryButton>
      </div>
    </div>
  );
};

export default TutorialCard;
