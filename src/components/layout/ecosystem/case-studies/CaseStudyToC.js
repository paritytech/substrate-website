// import cx from 'classNames';
import React from 'react';

// import useIntersectionObserver from '../../../../hooks/use-intersection-observer';

export default function TableOfContent() {
  // const [activeId, setActiveId] = useState();
  // useIntersectionObserver(setActiveId);
  const headings = ['overview', 'challenge', 'solution', 'result'];
  return (
    <ul className="list-none mb-8 transition-all">
      {headings.map((heading, index) => (
        <li key={index}>
          <a href={`#${heading}`} className="capitalize hover:font-bold">
            {heading}
          </a>
        </li>
      ))}
    </ul>
  );
}
