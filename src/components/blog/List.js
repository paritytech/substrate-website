import React from 'react';

/* import { useTranslation } from '../../utils/i18n'; */
import BlogCard from './Card';

const BlogList = ({ models }) => {
  /* const { t } = useTranslation(); */
  return (
    <section>
      {models ? (
        <ul>
          {models.map((model, index) => (
            <li key={index}>
              <BlogCard model={model.node} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No blog posts yet</p>
      )}
    </section>
  );
};

export default BlogList;
