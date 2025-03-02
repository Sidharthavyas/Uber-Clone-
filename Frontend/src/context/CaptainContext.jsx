import React, { useState, createContext } from 'react';

// Create and export the context with the name your components expect
export const CaptainContext = createContext();

// Create the provider component
const CaptainContextProvider = ({ children }) => {
  const [captain, setCaptain] = useState({
    email: '',
    fullname: {
      firstname: '',
      lastname: ''
    }
  });

  return (
    <CaptainContext.Provider value={{captain, setCaptain}}>
      {children}
    </CaptainContext.Provider>
  );
};

export default CaptainContextProvider;