import cx from 'classnames';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React, { useEffect, useState } from 'react';

import useComponentVisible from '../../hooks/use-component-visible';
import { useSiteMenus } from '../../hooks/use-site-menus';
import Icon from '../default/Icon';
import { buildSubMenu, LinkMenu } from '../default/Link';

const itemClass = 'pl-6 pr-12 py-2';

const ChildMenu = ({ slugPrefix, childMenu }) => {
  const { t } = useTranslation();

  return (
    <ul className="w-56 pt-4 m-0 list-none absolute top-0 left-full h-full rounded-tr-md rounded-br-md shadow-lg ring-1 ring-black dark:ring-white bg-white dark:bg-substrateDarkest">
      {childMenu.map(childMenuItem => {
        return (
          <li
            className="whitespace-nowrap m-0 focus:outline-none focus:bg-substrateBlueBg hover:text-substrateGreen hover:underline dark:text-white font-medium text-black"
            key={childMenuItem.id}
          >
            <LinkMenu
              className={cx(itemClass, 'block navMain')}
              prefix={slugPrefix}
              slug={childMenuItem.url}
              internal={childMenuItem.internal}
            >
              {t(childMenuItem.id)}
            </LinkMenu>
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
              'bg-substrateGreen-light dark:bg-green-700 underline': isComponentVisible,
            })}
            onClick={handleChildMenuOpen}
          >
            <span>{t(data.subMenuItem.id)}</span>
            <span className="absolute right-6 pt-1.5">
              <Icon name="arrow-next" className="fill-current text-black dark:text-white" />
            </span>
          </div>
          {isComponentVisible && (
            <ChildMenu slugPrefix={data.menuItem.url + data.subMenuItem.url} childMenu={data.childMenu} />
          )}
        </div>
      ) : (
        <LinkMenu
          className={cx(itemClass, 'block navMain')}
          prefix={data.menuItem.url}
          slug={data.subMenuItem.url}
          internal={data.subMenuItem.internal}
        >
          {t(data.subMenuItem.id)}
        </LinkMenu>
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
        <Icon
          name="arrow-dropdown"
          className={cx(
            'inline-block align-middle xl:ml-2 fill-current group-hover:text-substrateGreen dark:text-white',
            {
              'transform rotate-180 text-substrateGreen dark:text-substrateGreen': isComponentVisible,
              'text-black': !isComponentVisible,
            }
          )}
        />
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
              'm-0 list-none relative pt-4 pb-5 bg-white dark:bg-substrateDarkest shadow-lg ring-1 ring-substrateDark dark:ring-white rounded-md',
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
