import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import { useSiteMenus } from '../../hooks/use-site-menus';
import { buildSubMenu, Link } from '../default/Link';

const NavMain = () => {
  const { t } = useTranslation();
  const { menus } = useSiteMenus();
  return (
    <nav>
      <ul>
        {menus.main.map(menuItem => {
          const subMenu = buildSubMenu(menus, menuItem);
          return (
            <li key={menuItem.id}>
              <span>
                <Link to={menuItem.url}>{t(menuItem.id)}</Link>
              </span>
              {subMenu && (
                <ul>
                  {subMenu.map(subMenuItem => {
                    const child = subMenuItem.child;
                    const childMenu = menus[child];

                    return (
                      <li key={subMenuItem.id}>
                        <Link to={menuItem.url + subMenuItem.url}>{t(subMenuItem.id)}</Link>
                        {childMenu && (
                          <ul>
                            {childMenu.map(childMenuItem => {
                              return (
                                <li key={childMenuItem.id}>
                                  <Link to={menuItem.url + subMenuItem.url + childMenuItem.url}>
                                    {t(childMenuItem.id)}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMain;
