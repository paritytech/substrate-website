import cx from 'classnames';
import { Icon } from 'gatsby-plugin-substrate';
import React, { useEffect, useState } from 'react';

import { Card } from './Card';

export default function CardsContainer({ projects, searchQuery, selectedCategory }) {
  const cardsData = projects;
  console.log(cardsData);
  const [displayedData, setDisplayedData] = useState([]);
  const [dataAvailable, setDataAvailable] = useState(false);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const filteredData = cardsData
      .filter(each => {
        if (selectedCategory === 'all') {
          return each;
        } else if (each.categories && each.categories.toLowerCase().includes(selectedCategory)) {
          return each;
        }
      })
      .filter(each => {
        if (searchQuery.length === 0) {
          return each;
        } else if (each.name.toLowerCase().includes(searchQuery)) {
          return each;
        }
      });
    setDisplayedData(filteredData);
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    displayedData.length > 0 ? setDataAvailable(true) : setDataAvailable(false);
    setTimeout(() => {
      displayedData.length === 0 ? setNoResults(true) : setNoResults(false);
    }, 100);
  }, [displayedData]);

  return (
    <>
      {dataAvailable ? (
        <div className={cx('w-1/1 grid md:grid-cols-2 2xl:grid-cols-3')}>
          {displayedData.map((each, index) => (
            <div key={index}>
              <Card
                name={each.name}
                categories={each.categories}
                stars={each.listingInsights.stars}
                description={each.description}
              />
            </div>
          ))}
        </div>
      ) : (
        <>
          {noResults && (
            <div className="border dark:border-substrateGray-dark rounded-md flex flex-col items-center py-8">
              <Icon name="noResults" className="fill-current mb-8" />
              <p className="text-center px-4">Not found. Try a different version or search query.</p>
            </div>
          )}
        </>
      )}
    </>
  );
}
