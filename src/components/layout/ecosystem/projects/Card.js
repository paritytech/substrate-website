import cx from 'classnames';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Icon, Link } from 'gatsby-plugin-substrate';
import React from 'react';

import CaseStudyButton from '../teams/CaseStudyButton';

const createExcerpt = (string, length) => {
  if (string.length < length) return string;
  else return string.substring(0, length) + '...';
};

export default function ProjectCard({ model }) {
  const {
    node: {
      frontmatter,
      html,
      fields: { slug },
    },
  } = model;
  const { title, description, featured_image, category, type, link, show_case_study } = frontmatter;
  const image = getImage(featured_image);
  console.log(type);
  return (
    <div
      className={cx(
        'group mb-6 lg:mb-0 px-10 py-6 bg-white dark:bg-darkBackground animate-fade-in w-full',
        `border border-substrateDark dark:border-substrateGray-light border-opacity-10 dark:border-opacity-10`,
        'duration-75 ease-in-out hover:scale-105 hover:border hover:shadow-xl'
      )}
    >
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
      <GatsbyImage
        className="h-[110px] w-[110px] object-contain mb-6 rounded-full"
        image={image}
        alt={`${title} Project Logo`}
      />
      <p className="mb-10 h-[78px]">{createExcerpt(description, 260)}</p>
      {show_case_study && html && <CaseStudyButton link={`${slug}/#case-study`} />}
    </div>
  );
}
