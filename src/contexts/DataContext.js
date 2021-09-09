import React from 'react';

const DataContext = React.createContext();

const serializePathname = pathname => {
  const pathnames = pathname.toString().split('/');
  // remove empty string item before first '/'
  pathnames.shift();
  return pathnames;
};

const toTitleCase = str => {
  str = str.replace(/[-]/g, ' ');
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

const getPageTitle = pathArray => {
  const pageSlug = pathArray[pathArray.length - 1];
  return toTitleCase(pageSlug);
};

const DataProvider = ({ children, value }) => {
  const { location, pageContext } = value;

  return (
    <DataContext.Provider
      value={{
        location,
        pathArray: serializePathname(location.pathname),
        pageContext,
        pageTitle: getPageTitle(serializePathname(location.pathname)),
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
export { DataProvider };
