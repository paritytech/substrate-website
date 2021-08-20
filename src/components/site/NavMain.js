import { useTranslation } from 'gatsby-plugin-react-i18next';
import React, { useEffect, useState } from 'react';

import useComponentVisible from '../../hooks/use-component-visible';
import { useSiteMenus } from '../../hooks/use-site-menus';
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
    data.setChildMenuOpen(true);
  };

  useEffect(() => {
    !isComponentVisible && data.setChildMenuOpen(false);
  }, [isComponentVisible]);

  return (
    <li className="m-0 focus:outline-none focus:bg-substrateBlueBg hover:text-substrateGreen hover:underline dark:text-white font-medium cursor-pointer">
      {data.childMenu ? (
        <div ref={ref}>
          <div
            className={`${itemClass} pr-24 ${
              isComponentVisible ? 'bg-substrateGreen-light underline hover:text-black' : ''
            }`}
            onClick={handleChildMenuOpen}
          >
            <span>{t(data.subMenuItem.id)}</span>
            <span className="absolute right-6 pt-1.5">
              <svg
                className={` `}
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="13"
                viewBox="0 0 7 13"
                fill="none"
              >
                <path
                  d="M1 12L6 6.5L1 1"
                  stroke="#242A35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          {isComponentVisible && (
            <ChildMenu slugPrefix={data.menuItem.url + data.subMenuItem.url} childMenu={data.childMenu} />
          )}
        </div>
      ) : (
        <Link to={data.menuItem.url + data.subMenuItem.url} className={`${itemClass} block`}>
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
  const [childMenuOpen, setChildMenuOpen] = useState(false);

  return (
    <li className="list-none m-0" key={menuItem.id} ref={ref}>
      <button className="group focus:outline-none" onClick={() => setIsComponentVisible(!isComponentVisible)}>
        <span
          className={` font-medium group-hover:text-substrateGreen ${
            isComponentVisible ? 'text-substrateGreen' : null
          }`}
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

      {isComponentVisible && subMenu && (
        <div className={`absolute mt-4 ${isComponentVisible ? `animate-fade-in-down` : 'animate-fade-out'}`}>
          <ul
            className={`m-0 list-none relative pt-4 pb-5 bg-white dark:bg-black shadow-lg ring-1 ring-substrateDark dark:ring-white rounded-md ${
              childMenuOpen ? `rounded-tr-none rounded-br-none` : ''
            }`}
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
                    setChildMenuOpen,
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
