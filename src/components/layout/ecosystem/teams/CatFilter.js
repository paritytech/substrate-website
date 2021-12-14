import React from 'react';

export default function CatFilter(props) {
  const { categories, setCurCat } = props;
  return (
    <div>
      <h5 className="font-normal mb-2 lg:mb-3">Filter by industry</h5>
      <div>
        <select
          className="focus:outline-none text-sm dark:bg-darkBackground"
          onChange={event => setCurCat(event.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
