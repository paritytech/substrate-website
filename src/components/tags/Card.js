import React from 'react';

import { Link } from '../default/Link';

const TagCard = ({ model }) => {
  const { frontmatter, fields } = model;
  const { name } = frontmatter;
  const { slug } = fields;
  return (
    <article>
      <Link to={`/tags/${slug}`}>
        <h2>{name}</h2>
      </Link>
    </article>
  );
};

export default TagCard;
