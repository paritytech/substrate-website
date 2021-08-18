import React from 'react';

import TagCard from './Card';

const TagList = ({ models }) => {
  return (
    <section>
      {models ? (
        <ul>
          {models.map((model, index) => (
            <li key={index}>
              <TagCard model={model.node} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No tags yet</p>
      )}
    </section>
  );
};

export default TagList;
