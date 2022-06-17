import cx from 'classnames';
import { Link } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { buildSubMenu } from 'gatsby-plugin-substrate';
import React from 'react';

import useComponentVisible from '../../hooks/use-component-visible';
import { useSiteMenus } from '../../hooks/use-site-menus';
import Icon from '../default/Icon';

const DropDownItem = ({ item }) => {
  const { t } = useTranslation();
  return (
    <div
      className={cx(`p-9`, {
        'max-w-[320px]': item.menu.length === 1,
        'max-w-[640px]': item.menu.length >= 2,
      })}
    >
      <div className="pb-5">
        <Link className="no-underline" to={item.url}>
          <h3 className="text-lg m-0 text-substrateGreen uppercase">{t(item.title)}</h3>
        </Link>
        <p className="m-0 text-sm italic text-silveredGray dark:text-silveredGrayDarker">{t(item.subtitle)}</p>
      </div>
      <div
        className={cx(`grid grid-cols-${Math.min(item.menu.length, 3)} gap-y-5 gap-x-10`)}
        style={{ gridTemplateAreas: item.gridArea || 'none' }}
      >
        {item.menu.map(({ heading, links }, index) => {
          return (
            <div key={index} {...(item.gridArea && { style: { gridArea: `grid-item-${index}` } })}>
              {heading && (
                <p className="text-base m-0 mb-1 uppercase text-superDarkGray dark:text-silveredGrayDarker">
                  {heading}
                </p>
              )}
              <ul className="m-0">
                {links &&
                  links.map((link, index) => (
                    <li key={index} className="list-none m-0 leading-3">
                      {link.id && link.url && (
                        <Link className="no-underline" to={link.url}>
                          <span className="text-sm leading-6 text-substrateBlackish dark:text-white font-bold capitalize block hover:text-substrateGreen hover:underline">
                            {t(link.id)}
                          </span>
                        </Link>
                      )}
                      {link.subText && (
                        <span className="block text-sm text-silveredGray dark:text-silveredGrayDarker italic leading-4 mb-1">
                          {t(link.subText)}
                        </span>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const DropDown = ({ menuItem, header, isScrolled }) => {
  const { t } = useTranslation();
  const { menus } = useSiteMenus();
  const subMenu = { ...menuItem, ...buildSubMenu(menus, menuItem) };
  const {
    ref,
    isComponentVisible: isDropdownVisible,
    setIsComponentVisible: setIsDropdownVisible,
  } = useComponentVisible(false);

  return (
    <li className="list-none m-0" key={menuItem.id} ref={ref}>
      <button className="group" onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
        <span
          className={cx('font-medium capitalize', {
            'text-substrateGreen':
              (isDropdownVisible && header === 'default') || (isDropdownVisible && header === 'home' && isScrolled),
            'text-white': isDropdownVisible && header === 'home' && !isScrolled,
            'group-hover:text-substrateGreen': header === 'default' || (header === 'home' && isScrolled),
            'group-hover:text-white': header === 'home' && !isScrolled,
          })}
        >
          {t(menuItem.id)}
        </span>
        <Icon
          name="arrow-dropdown"
          className={cx('inline-block align-middle xl:ml-2 fill-current dark:text-white', {
            'transform rotate-180 text-substrateGreen dark:text-substrateGreen':
              (isDropdownVisible && header === 'default') || (isDropdownVisible && header === 'home' && isScrolled),
            'transform rotate-180 text-white dark:text-substrateGreen':
              isDropdownVisible && header === 'home' && !isScrolled,
            'text-black': !isDropdownVisible,
            'group-hover:text-substrateGreen': header === 'default' || (header === 'home' && isScrolled),
            'group-hover:text-white': header === 'home' && !isScrolled,
          })}
        />
      </button>

      {isDropdownVisible && subMenu && (
        <div
          className={cx('absolute mt-4', {
            'animate-fade-in-down': isDropdownVisible,
            'animate-fade-out': !isDropdownVisible,
          })}
        >
          <ul
            className={cx(
              'm-0 list-none relative bg-white dark:bg-substrateDarkest shadow-lg ring-1 ring-substrateDark dark:ring-white rounded-md'
            )}
          >
            <li className="list-none m-0">
              <DropDownItem item={subMenu} />
            </li>
          </ul>
        </div>
      )}
    </li>
  );
};

const NavMain = ({ header, isScrolled }) => {
  const { menus } = useSiteMenus();

  return (
    <nav className="navMain">
      <ul className="m-0 flex justify-evenly">
        {menus.main.map(menuItem => {
          return <DropDown header={header} isScrolled={isScrolled} key={menuItem.id} menuItem={menuItem} />;
        })}
      </ul>
    </nav>
  );
};

export default NavMain;
