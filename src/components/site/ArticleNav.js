import cx from 'classnames';
import React, { useEffect, useState } from 'react';

import useHeadingsData from '../../hooks/use-headings-data';
import useIntersectionObserver from '../../hooks/use-intersection-observer';
import useScrollListener from '../../hooks/use-scroll-listener';

const ArticleNav = () => {
  const [activeId, setActiveId] = useState();
  const headings = useHeadingsData();
  useIntersectionObserver(setActiveId);

  return (
    <nav aria-label="Table of contents" className="max-w-xs max-h-full overflow-auto">
      <Headings headings={headings} activeId={activeId} />
    </nav>
  );
};

const Headings = ({ headings, activeId }) => {
  const scroll = useScrollListener();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    /* TODO: add into context */
    if (scroll.y > 15) {
      setIsScrolled(true);
    } else if (scroll.y < 1) {
      setIsScrolled(false);
    }
  }, [scroll.y]);

  return (
    <ul className={cx('list-none ml-0 mb-8 transition-all', { 'mt-0': !isScrolled, 'mt-10': isScrolled })}>
      <li className="mb-3 font-semibold">CONTENT</li>
      {headings.map(({ title, id }) => (
        <li key={id}>
          <a href={`#${id}`} className={`${id === activeId && 'font-semibold'} hover:font-bold`}>
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ArticleNav;
