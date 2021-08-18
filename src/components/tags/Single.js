import React from 'react';

const TagSingle = ({ model }) => {
  const { frontmatter } = model;
  const { title } = frontmatter;
  return (
    <article>
      <header>
        <h1>{title}</h1>
      </header>
    </article>
  );
};

export default TagSingle;
