import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

/* import { useTranslation } from '../../utils/i18n'; */
import { Link } from '../default/Link';

const BlogCard = ({ model }) => {
  /* const { t } = useTranslation(); */
  const { frontmatter, fields } = model;
  const { title, featured_image } = frontmatter;
  const { slug } = fields;
  const imageData = getImage(featured_image);

  return (
    <article>
      <Link to={`/blog/${slug}`}>
        {imageData && <GatsbyImage image={imageData} alt="" />}
        <h2>{title}</h2>
      </Link>
    </article>
  );
};

export default BlogCard;
