import React from 'react';

export const DataContext = React.createContext();

const DataProvider = ({ children, value }) => {
  const { location, pageContext } = value;
  return (
    <DataContext.Provider
      value={{
        location,
        pageContext,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
export { DataProvider };
