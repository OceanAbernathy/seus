import { createContext, useState } from 'react';

export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [fullName, setFullName] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');

  const [emailError, setEmailError] = useState('');

  const [passwordError, setPasswordError] = useState('');

  const [navItems, setNavItems] = useState(0);

  return (
    <Context.Provider
      value={{
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
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        navItems,
        setNavItems,
      }}
    >
      {children}
    </Context.Provider>
  );
};
