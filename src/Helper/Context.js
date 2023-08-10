import { createContext, useState } from 'react';

export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [lessons, setLessons] = useState([]);
  const [userLessons, setUserLessons] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [navItems, setNavItems] = useState(0);

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
        error,
        setError,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        lessons,
        setLessons,
        userLessons,
        setUserLessons,
        achievements,
        setAchievements,
        navItems,
        setNavItems,
      }}
    >
      {children}
    </Context.Provider>
  );
};
