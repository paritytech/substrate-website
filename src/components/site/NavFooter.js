import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import { useSiteMenus } from '../../hooks/use-site-menus';
import { Link } from '../default/Link';

const NavFooter = () => {
  const { t } = useTranslation();
  const { menus } = useSiteMenus();
  return (
    <nav className="m-0 p-0 hidden xs:block lg:w-full lg:max-w-screen md:h-auto">
      <ul className="h-auto m-0 p-0 list-none flex flex-wrap flex-start gap-x-4">
        {menus.footerMain.map(menuItem => {
          return (
            <li key={menuItem.id}>
              <Link to={menuItem.url}>
                <span className="block font-semibold text-substrateGreen sm:w-28 leading-relaxed">
                  {t(menuItem.id)}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavFooter;
