import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import { useSiteMenus } from '../../hooks/use-site-menus';
import { useSiteMetadata } from '../../hooks/use-site-metadata';
import Icon from '../default/Icon';
import { Link } from '../default/Link';

const HeaderNav = () => {
  const { t } = useTranslation();
  const { menus } = useSiteMenus();
  const { siteMetadata } = useSiteMetadata();

  return (
    <>
      <div className="h-auto pb-6 md:flex md:flex-row-reverse md:justify-between md:items-center">
        <div className="flex items-center py-4">
          <Link
            className="mr-11 md:mr-0 md:ml-9 transform transition-all duration-300 ease-in-out hover:opacity-50"
            to={siteMetadata.twitter}
          >
            <Icon name="twitter" />
          </Link>
          <Link
            className="mr-11 md:mr-0 md:ml-9 transform transition-all duration-300 ease-in-out hover:opacity-50"
            to={siteMetadata.stackOverflow}
          >
            <Icon name="stackoverflow" />
          </Link>
          <Link
            className="mr-11 md:mr-0 md:ml-9 transform transition-all duration-300 ease-in-out hover:opacity-50"
            to={siteMetadata.element}
          >
            <Icon name="element" />
          </Link>
        </div>
        <div className="underline-anchor inline-flex flex-col md:flex-row py-6 text-[#DFE3EA] text-xs font-light">
          <div className="mb-4 md:mb-0 md:pr-8 inline-block">
            © {new Date().getFullYear()} Parity Technologies{` `}All Rights Reserved{` `}
          </div>
          <ul className="list-none">
            {menus.legal.map(menuItem => {
              return (
                <li key={menuItem.id} className="mb-4 md:mb-0 md:mr-8 inline-block">
                  <Link to={menuItem.url}>{t(menuItem.id)}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
