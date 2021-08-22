import cx from 'classnames';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React, { useEffect, useState } from 'react';

import useComponentVisible from '../../hooks/use-component-visible';
import { useSiteMenus } from '../../hooks/use-site-menus';
import Icon from '../default/Icon';
import { buildSubMenu, Link } from '../default/Link';

const itemClass = 'pl-6 pr-12 py-2';

const ChildMenu = ({ slugPrefix, childMenu }) => {
  const { t } = useTranslation();

  return (
    <ul className="w-56 pt-4 m-0 list-none absolute top-0 left-full h-full rounded-tr-md rounded-br-md shadow-lg ring-1 ring-black dark:ring-white bg-white dark:bg-black">
      {childMenu.map(childMenuItem => {
        return (
          <li
            className="whitespace-nowrap m-0 focus:outline-none focus:bg-substrateBlueBg hover:text-substrateGreen hover:underline dark:text-white font-medium text-black"
            key={childMenuItem.id}
          >
            <Link className={`${itemClass} block`} to={slugPrefix + childMenuItem.url}>
              {t(childMenuItem.id)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const DropDownItem = ({ data }) => {
  const { t } = useTranslation();
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  const handleChildMenuOpen = () => {
    setIsComponentVisible(!isComponentVisible);
    data.setIsChildMenuOpen(true);
  };

  useEffect(() => {
    !isComponentVisible && data.setIsChildMenuOpen(false);
  }, [isComponentVisible]);

  return (
    <li
      className={cx(
        'm-0 focus:outline-none focus:bg-substrateBlueBg hover:text-substrateGreen hover:underline dark:text-white font-medium cursor-pointer',
        {
          'hover:text-black': isComponentVisible,
        }
      )}
    >
      {data.childMenu ? (
        <div ref={ref}>
          <div
            className={cx(itemClass, 'pr-24', {
              'bg-substrateGreen-light underline hover:text-black': isComponentVisible,
            })}
            onClick={handleChildMenuOpen}
          >
            <span>{t(data.subMenuItem.id)}</span>
            <span className="absolute right-6 pt-1.5">
              <Icon name="arrow-next" />
            </span>
          </div>
          {isComponentVisible && (
            <ChildMenu slugPrefix={data.menuItem.url + data.subMenuItem.url} childMenu={data.childMenu} />
          )}
        </div>
      ) : (
        <Link to={data.menuItem.url + data.subMenuItem.url} className={cx(itemClass, 'block')}>
          {t(data.subMenuItem.id)}
        </Link>
      )}
    </li>
  );
};

const DropDown = ({ menuItem }) => {
  const { t } = useTranslation();
  const { menus } = useSiteMenus();
  const subMenu = buildSubMenu(menus, menuItem);
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const [isChildMenuOpen, setIsChildMenuOpen] = useState(false);

  return (
    <li className="list-none m-0" key={menuItem.id} ref={ref}>
      <button className="group focus:outline-none" onClick={() => setIsComponentVisible(!isComponentVisible)}>
        <span
          className={cx('font-medium group-hover:text-substrateGreen', { 'text-substrateGreen': isComponentVisible })}
        >
          {t(menuItem.id)}
        </span>
        <span
          className={cx('inline-block align-middle xl:ml-2', {
            'transform rotate-180 text-substrateGreen': isComponentVisible,
            'text-black': !isComponentVisible,
          })}
        >
          <Icon name="arrow-dropdown" />
        </span>
      </button>

      {isComponentVisible && subMenu && (
        <div
          className={cx('absolute mt-4', {
            'animate-fade-in-down': isComponentVisible,
            'animate-fade-out': !isComponentVisible,
          })}
        >
          <ul
            className={cx(
              'm-0 list-none relative pt-4 pb-5 bg-white dark:bg-black shadow-lg ring-1 ring-substrateDark dark:ring-white rounded-md',
              {
                'rounded-tr-none rounded-br-none': isChildMenuOpen,
              }
            )}
          >
            {subMenu.map(subMenuItem => {
              const child = subMenuItem.child;
              const childMenu = menus[child];

              return (
                <DropDownItem
                  key={subMenuItem.id}
                  data={{
                    menuItem,
                    subMenuItem,
                    childMenu,
                    setIsChildMenuOpen,
                  }}
                ></DropDownItem>
              );
            })}
          </ul>
        </div>
      )}
    </li>
  );
};

const NavMain = () => {
  const { menus } = useSiteMenus();

  return (
    <nav>
      <ul className="m-0 flex justify-evenly">
        {menus.main.map(menuItem => {
          return <DropDown key={menuItem.id} menuItem={menuItem}></DropDown>;
        })}
      </ul>
    </nav>
  );
};

export default NavMain;
