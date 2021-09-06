import { Link } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import { useSiteMenus } from '../../hooks/use-site-menus';
import Icon from '../default/Icon';
import Logo from './Logo';

const NavMobile = ({ toggleMenu }) => {
  const { menus } = useSiteMenus();
  const { t } = useTranslation();

  return (
    <div className="lg:hidden absolute inset-0 bg-substrateGray-light dark:bg-substrateDarkest z-90 animate-fade-in-right">
      <div className="h-16 px-6 flex items-center justify-between">
        <div className="w-32">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="h-auto cursor-pointer" onClick={toggleMenu}>
          <Icon name="close-x" />
        </div>
      </div>
      <div className="bg-substrateGray-light dark:bg-substrateDarkest h-screen z-20">
        <div className="py-8">
          {menus.main.map(menuItem => {
            return (
              <div
                key={menuItem.id}
                className="py-3 hover:bg-substrateGreen-light dark:hover:bg-green-700 font-medium transform transition-all duration-75 ease-in-out hover:font-bold"
              >
                <div className="px-6 flex items-center justify-between focus:outline-none cursor-pointer">
                  <div className="text-2xl">{t(menuItem.id)}</div>
                  <Icon name="arrow-next" className="fill-current text-black dark:text-white w-5 h-5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
