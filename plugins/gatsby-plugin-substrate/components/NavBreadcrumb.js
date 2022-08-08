import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import React from 'react';

import { DataContext } from '../contexts/DataContext';

const NavBreadcrumb = ({ linkMiddleParent = false, hiddenCrumbs = ['/'] }) => {
  return (
    <DataContext.Consumer>
      {({ pageContext, pathArray, pageTitle }) => {
        const {
          breadcrumb: { location },
        } = pageContext;

        const locationWithoutLastSlash = `/${pathArray[0]}/${pathArray[1]}/${pathArray[2]}`;

        return (
          <Breadcrumb
            crumbs={pageContext.breadcrumb.crumbs}
            crumbSeparator=""
            crumbLabel={pageTitle}
            hiddenCrumbs={hiddenCrumbs}
            /* keep parent as a link and disable children links (eg):
          "/<ecosystem>/resources/awesome-substrate" and "/<ecosystem>/resources/" */
            disableLinks={[
              location,
              locationWithoutLastSlash,
              !linkMiddleParent ? `/${pathArray[0]}/${pathArray[1]}` : '',
            ]}
            className="breadcrumb__list breadcrumb__list__item breadcrumb__separator breadcrumb__link breadcrumb__link__active"
          />
        );
      }}
    </DataContext.Consumer>
  );
};

export { NavBreadcrumb };
