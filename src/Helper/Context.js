import { createContext, useState } from 'react';

export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [level, setLevel] = useState('');
  const [style, setStyle] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [navItems, setNavItems] = useState(0);
  const [selected, setSelected] = useState('');
  const [profile, setProfile] = useState('');
  return (
    <Context.Provider
      value={{
        user,
        setUser,
        displayName,
        setDisplayName,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        level,
        setLevel,
        style,
        setStyle,
        error,
        setError,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        navItems,
        setNavItems,
        selected,
        setSelected,
        profile,
        setProfile,
      }}
    >
      {children}
    </Context.Provider>
  );
};
