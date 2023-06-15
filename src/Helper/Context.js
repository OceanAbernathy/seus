import { createContext, useState } from 'react';

export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const [items, setItems] = useState(0);

  return (
    <Context.Provider value={{ loggedIn, setLoggedIn, items, setItems }}>
      {children}
    </Context.Provider>
  );
};
