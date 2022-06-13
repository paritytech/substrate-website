import cx from 'classnames';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { buildSubMenu, Link, LinkMenu } from 'gatsby-plugin-substrate';
import React, { useState } from 'react';

import { useSiteMenus } from '../../hooks/use-site-menus';
import Icon from '../default/Icon';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const NavSubItemHeading = ({ heading, hasChildren, isOpen = false }) => {
  const { t } = useTranslation();
  return (
    <div className="block relative text-black dark:text-white hover:no-underline px-6 py-3 text-lg hover:font-bold font-medium cursor-pointer">
      <span className="capitalize">{t(heading)}</span>
      {hasChildren && (
        <Icon
          name="arrow-dropdown"
          className={cx('absolute transform right-0 top-0 mr-6 mt-4 w-6 h-6 fill-current text-black dark:text-white', {
            'rotate-180': isOpen,
          })}
        />
      )}
    </div>
  );
};

const NavMobileSubMenuItem = ({ subMenuItem }) => {
  const { t } = useTranslation();
  const [isChildMenuOpen, setIsChildMenuOpen] = useState(true);

  return (
    <div onClick={() => setIsChildMenuOpen(!isChildMenuOpen)}>
      {subMenuItem.heading && (
        <NavSubItemHeading
          heading={subMenuItem.heading}
          hasChildren={subMenuItem.links.length}
          isOpen={isChildMenuOpen}
        />
      )}

      <div className={cx({ hidden: !isChildMenuOpen })}>
        {subMenuItem.links.map((childMenuItem, index) => {
          return (
            <div key={index}>
              <LinkMenu
                className={cx('block font-medium hover:font-bold pl-12 mb-0 py-3 capitalize', {
                  'pl-0': !subMenuItem.heading,
                })}
                slug={childMenuItem.href}
              >
                {!subMenuItem.heading && <NavSubItemHeading heading={childMenuItem.id} hasChildren={false} />}
                {subMenuItem.heading && t(childMenuItem.id)}
              </LinkMenu>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const NavMobileSubMenu = ({ menuItem, handleSubMenu }) => {
  const { menus } = useSiteMenus();
  const subMenu = buildSubMenu(menus, menuItem);
  const { t } = useTranslation();

  return (
    <div className="absolute inset-0 bg-substrateGray-light dark:bg-substrateDarkest h-screen animate-fade-in-right">
      <div className="bg-substrateGreen-light dark:bg-green-700">
        <div className="px-6 h-16 flex items-center justify-between">
          <div className="absolute left-0 top-0 p-6 -mt-0.5 cursor-pointer" onClick={() => handleSubMenu(false)}>
            <Icon name="arrow-back" className="fill-current text-black dark:text-white" />
          </div>
          <div className="text-xl font-bold w-full text-center">{t(menuItem.id)}</div>
        </div>
      </div>
      <div className="pt-7 h-[calc(100vh-100px)] overflow-auto">
        {subMenu.menu.map((subMenuItem, index) => {
          return <NavMobileSubMenuItem key={index} subMenuItem={subMenuItem} />;
        })}
      </div>
    </div>
  );
};

const NavMobileItem = ({ menuItem, handleSubMenu }) => {
  const { t } = useTranslation();

  return (
    <div
      className="px-6 py-3 hover:bg-substrateGreen-light dark:hover:bg-green-700 font-medium transform transition-all duration-75 ease-in-out hover:font-bold"
      onClick={() => handleSubMenu(menuItem)}
    >
      <div className="flex items-center justify-between focus:outline-none cursor-pointer">
        <div className="text-2xl capitalize">{t(menuItem.id)}</div>
        <Icon name="arrow-next" className="fill-current text-black dark:text-white w-5 h-5" />
      </div>
    </div>
  );
};

const NavMobile = ({ toggleMenu }) => {
  const { menus } = useSiteMenus();
  const [isMenuItemOpen, setIsMenuItemOpen] = useState(false);

  const handleSubMenu = menuItem => {
    setIsMenuItemOpen(menuItem);
  };

  return (
    <div className="navMobile lg:hidden absolute inset-0 bg-substrateGray-light dark:bg-substrateDarkest z-90 animate-fade-in-right">
      <div className="h-16 px-6 flex items-center justify-between">
        <div className="w-32">
          <Link to="/">
            <Logo />
          </Link>
        </div>
      </div>
      <div className="bg-substrateGray-light dark:bg-substrateDarkest h-screen z-20">
        <div className="py-8">
          {menus.main.map(menuItem => {
            return <NavMobileItem key={menuItem.id} menuItem={menuItem} handleSubMenu={handleSubMenu} />;
          })}
        </div>
        <div className="px-6">
          <ThemeToggle />
        </div>
      </div>
      {isMenuItemOpen && <NavMobileSubMenu menuItem={isMenuItemOpen} handleSubMenu={handleSubMenu} />}
      <div className="absolute top-0 right-0 h-auto cursor-pointer p-6 -mt-0.5" onClick={toggleMenu}>
        <Icon name="close-x" />
      </div>
    </div>
  );
};

export default NavMobile;
