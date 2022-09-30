import cx from 'classnames';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Icon, Link } from 'gatsby-plugin-substrate';
import React from 'react';

import CaseStudyButton from '../teams/CaseStudyButton';

// const createExcerpt = (string, length) => {
//   if (string && length) {
//     string.length < length ? string : string.substring(0, length) + '...';
//   }
// };

export default function ProjectCard({ model }) {
  const {
    node: {
      frontmatter,
      html,
      fields: { slug },
    },
  } = model;
  const { title, description, featured_image, category, link, show_case_study } = frontmatter;
  const image = getImage(featured_image);
  return (
    <div className="relative bg-substrateGray-light dark:bg-substrateDark shadow-xl duration-75 ease-in-out hover:z-10 border border-substrateDark dark:border-substrateGray-light border-opacity-10 dark:border-opacity-10  -mt-px -ml-px hover:scale-105 hover:shadow-xl">
      <div className={cx('group lg:mb-0 p-6 bg-white dark:bg-darkBackground animate-fade-in h-full w-full', '')}>
        <div className="mb-6">
          <div className="flex items-center">
            <Link className="inline-block" to={`/ecosystem/projects/${slug}`}>
              <div className="text-2xl font-bold">{title}</div>
            </Link>
            <Link className="inline-block" to={link}>
              <Icon
                name="external-link"
                className="lg:hidden group-hover:block h-4 w-4 ml-4 mt-0.5 fill-current text-substrateGreen animate-fade-in duration-75"
              />
            </Link>
          </div>
          <div className="text-sm">
            {category.map((name, index) => {
              return (
                <span key={index}>
                  {index > 0 && ', '} {name}
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
        <p className="mb-10 text-white">{description.substring(0, 120) + '...'}</p>
        {show_case_study && html && <CaseStudyButton link={`${slug}/#case-study`} />}
      </div>
    </div>
  );
}
