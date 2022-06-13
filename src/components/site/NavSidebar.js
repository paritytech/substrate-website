import cx from 'classnames';
// import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Link } from 'gatsby-plugin-substrate';
import React from 'react';

import data from '../../../data/teams.json';
import DataContext from '../../contexts/DataContext';
import { useSiteMenus } from '../../hooks/use-site-menus';

const NavSidebarCaseStudySubMenu = () => {
  const teams = data.teams;
  const caseStudies = teams.filter(team => 'caseStudy' in team);

  return (
    <>
      <span className="px-6 p-4 block bg-substrateGray dark:bg-gray-700 font-bold mb-2">Case Studies</span>
      <ul className="p-0 m-0 list-none">
        {caseStudies &&
          caseStudies.map(({ name, caseStudy }, idx) => {
            return (
              <li className="font-medium p-0 m-0" key={idx}>
                <Link to={`/ecosystem/projects/${caseStudy}`}>
                  <p className={cx('px-6 p-3 block hover:font-bold m-0')}>{name}</p>
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

const filterMenuItem = (menu, parent) => {
  const parentItem = menu.filter(function (menuItem) {
    return menuItem.url.includes(parent);
  });
  return Object.assign(...parentItem);
};

const NavSidebarSubMenu = ({ parent, category }) => {
  // const { t } = useTranslation();
  const { menus } = useSiteMenus();
  const parentItem = filterMenuItem(menus.main, parent);
  console.log({ parentItem, category, menus });
  return null;
};

export default function NavSidebar() {
  return (
    <DataContext.Consumer>
      {({ pathArray }) => (
        <nav className={cx('navSidebar pt-10 pb-5')}>
          {pathArray[2] === 'case-studies' ? (
            <NavSidebarCaseStudySubMenu />
          ) : (
            <NavSidebarSubMenu parent={pathArray[0]} category={pathArray[1]} />
          )}
        </nav>
      )}
    </DataContext.Consumer>
  );
}
