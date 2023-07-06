import { createContext, useState } from 'react';

export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [fullName, setFullName] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');

  const [items, setItems] = useState(0);

  return (
    <Context.Provider
      value={{
        loggedIn,
        setLoggedIn,
        state,
        setState,
        fullName,
        setFullName,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        error,
        setError,
        items,
        setItems,
      }}
    >
      {children}
    </Context.Provider>
  );
};
