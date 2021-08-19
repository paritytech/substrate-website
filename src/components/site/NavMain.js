import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import useComponentVisible from '../../hooks/use-component-visible';
import { useSiteMenus } from '../../hooks/use-site-menus';
import { buildSubMenu, Link } from '../default/Link';

const DropDown = ({ menuItem, children }) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const { t } = useTranslation();

  return (
    <li className="list-none m-0" key={menuItem.id} ref={ref}>
      <button className="group focus:outline-none" onClick={() => setIsComponentVisible(!isComponentVisible)}>
        <span
          className={`font-medium group-hover:text-substrateGreen ${isComponentVisible ? 'text-substrateGreen' : null}`}
        >
          {t(menuItem.id)}
        </span>
        <svg
          className={`inline-block xl:ml-2 fill-current group-hover:text-substrateGreen dark:text-white ${
            isComponentVisible ? 'transform rotate-180 text-substrateGreen' : `text-black`
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-5 -8 24 24"
          width="16"
          height="16"
          preserveAspectRatio="xMinYMin"
        >
          <path d="M7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364l4.95 4.95z"></path>
        </svg>
      </button>

      {children}
    </li>
  );
};

const NavMain = () => {
  const { t } = useTranslation();
  const { menus } = useSiteMenus();

  return (
    <nav>
      <ul className="m-0 flex justify-evenly">
        {menus.main.map(menuItem => {
          const subMenu = buildSubMenu(menus, menuItem);
          return (
            <DropDown key={menuItem.id} menuItem={menuItem}>
              {subMenu && (
                <ul className="hidden">
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
            </DropDown>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMain;
