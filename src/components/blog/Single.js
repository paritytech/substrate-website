import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import { useTranslation } from '../../utils/i18n';
import { Link } from '../default/Link';

const BlogSingle = ({ model }) => {
  const { t } = useTranslation();
  const { frontmatter, html } = model;
  const { title, tags, featured_image } = frontmatter;
  const imageData = getImage(featured_image);
  console.log(frontmatter);

  return (
    <article>
      <header>
        {imageData && <GatsbyImage image={imageData} alt="" />}
        <h1>{title}</h1>
      </header>
      <main>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </main>
      <footer>
        {tags ? (
          <ul>
            {tags.map(tag => (
              <li key={tag}>
                <Link to={`/tags/${tag}`}>{t(tag)}</Link>
              </li>
            ))}
          </ul>
        ) : null}
      </footer>
    </article>
  );
};

export default BlogSingle;
