import cx from 'classnames';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import DataContext from '../../contexts/DataContext';
import { useSiteMenus } from '../../hooks/use-site-menus';
import { LinkMenu } from '../default/Link';

const filterMenuItem = (menu, parent) => {
  const parentItem = menu.filter(function (menuItem) {
    return menuItem.url.includes(parent);
  });
  return Object.assign(...parentItem);
};

const currentPage = (url, slug) => {
  return url.includes(slug);
};

const NavSidebarSubMenu = ({ parent, category, pageSlug }) => {
  const { t } = useTranslation();
  const { menus } = useSiteMenus();
  const parentItem = filterMenuItem(menus.main, parent);
  const categoryItem = filterMenuItem(menus[parent], category);
  const subMenu = menus[category];

  return (
    <>
      <span className="px-6 p-4 block bg-substrateGray dark:bg-gray-700 font-bold mb-2">{t(categoryItem.id)}</span>
      <ul className="p-0 m-0 list-none">
        {subMenu.map(subMenuItem => {
          const isCurrentPage = currentPage(subMenuItem.url, pageSlug);
          return (
            <li className="font-medium p-0 m-0" key={subMenuItem.id}>
              <LinkMenu
                className={cx('px-6 p-3 block', { 'font-bold': isCurrentPage })}
                prefix={parentItem.url + categoryItem.url}
                slug={subMenuItem.url}
                internal={subMenuItem.internal}
              >
                {t(subMenuItem.id)}
              </LinkMenu>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default function NavSidebar() {
  return (
    <DataContext.Consumer>
      {({ pathArray, pageSlug }) => (
        <nav className={cx('pt-10 pb-5')}>
          <NavSidebarSubMenu parent={pathArray[0]} category={pathArray[1]} pageSlug={pageSlug} />
        </nav>
      )}
    </DataContext.Consumer>
  );
}
