import cx from 'classnames';
import React from 'react';

export default function CatFilter(props) {
  const { categories, curCat, setCurCat } = props;
  return (
    <div className="mb-8">
      <h5 className="font-normal mb-6">Filter by industry</h5>
      <div className="lg:hidden">
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
      <div className="hidden lg:block border-t border-b border-substrateDark border-opacity-10 dark:border-substrateGray-light dark:border-opacity-10 pb-6">
        {categories.map((category, index) => (
          <div
            onClick={event => setCurCat(event.target.getAttribute('value'))}
            key={index}
            value={category}
            className={cx('inline-block mr-10 mt-6 cursor-pointer text-sm hover:underline focus:outline-none', {
              'font-bold underline': curCat === category,
            })}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}
