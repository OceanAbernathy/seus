import { createContext, useState } from 'react';

export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [navItems, setNavItems] = useState(0);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        error,
        setError,
        navItems,
        setNavItems,
      }}
    >
      {children}
    </Context.Provider>
  );
};
