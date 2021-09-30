import cx from 'classnames';
import React from 'react';

export default function TypeFilter(props) {
  const { types, curType, setCurType } = props;
  return (
    <div className="mb-8">
      <h5 className="font-normal mb-6">Filter by type</h5>
      <div className="lg:hidden">
        <select
          className="focus:outline-none text-sm dark:bg-darkBackground"
          onChange={event => setCurType(event.target.value)}
        >
          {types.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden lg:block">
        <div className="w-full h-11 bg-substrateGray-light dark:bg-darkBackground flex justify-center items-center divide-x rounded">
          {types.map((type, index) => {
            return (
              <div
                onClick={event => {
                  setCurType(event.target.getAttribute('value'));
                }}
                key={index}
                value={type}
                className={cx(
                  'w-1/4 h-11 font-bold text-sm flex justify-center items-center hover:bg-substrateDark hover:text-white cursor-pointer transform transition-all duration-150 ease-in-out ',
                  { 'rounded-tl rounded-bl': index === 0 },
                  { 'rounded-br rounded-tr': index === 3 },
                  { 'bg-substrateDark text-white': curType === type }
                )}
              >
                {type}
                {curType === type && <span className="ml-6">&#10003;</span>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
