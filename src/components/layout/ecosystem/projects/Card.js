import cx from 'classnames';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby-plugin-substrate';
import React from 'react';

import CaseStudyButton from '../teams/CaseStudyButton';

function toTitleCase(str) {
  return str
    .toLowerCase()
    .replace(/-/g, ' ')
    .split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

export default function ProjectCard({ model }) {
  const {
    node: {
      frontmatter,
      html,
      fields: { slug },
    },
  } = model;
  const { title, description, featured_image, category, show_case_study } = frontmatter;
  const image = getImage(featured_image);
  return (
    <div
      className={cx(
        'relative -mt-px -ml-px bg-white dark:bg-darkBackground ease-in-out',
        'border border-substrateDark dark:border-substrateGray-light border-opacity-10 dark:border-opacity-10',
        'hover:border hover:shadow-xl hover:z-20 hover:scale-105 hover:duration-75'
      )}
    >
      <Link className="inline-block" to={`/ecosystem/projects/${slug}`}>
        <div className={cx('group lg:mb-0 p-6 bg-white dark:bg-darkBackground animate-fade-in h-full w-full', '')}>
          <div className="mb-6">
            <div className="flex items-center">
              <div className="mb-2 text-2xl font-bold">{title}</div>
            </div>
            <div className="text-sm">
              {category.map((name, index) => {
                return (
                  <span key={index}>
                    {index > 0 && ', '} {toTitleCase(name)}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="rounded-full mb-6 h-[60px] w-[60px] bg-gray-300 p-0.5">
            {image && (
              <GatsbyImage
                className="object-contain w-full h-full rounded-full"
                image={image}
                alt={`${title} Project Logo`}
              />
            )}
          </div>
          <p className="text-sm mb-0 h-20 line-clamp-4 text-black dark:text-white">
            {description.substring(0, 130) + '...'}
          </p>
          {show_case_study && html && <CaseStudyButton link={`${slug}/#case-study`} />}
        </div>
      </Link>
    </div>
  );
}
