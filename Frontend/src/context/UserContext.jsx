import React, { useState, createContext } from 'react';

// Create and export the context with the name your components expect
export const UserContext = createContext();

// Create the provider component
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: '',
    fullname: {
      firstname: '',
      lastname: ''
    }
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;