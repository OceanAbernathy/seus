import { ChakraProvider } from '@chakra-ui/react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useContext, useEffect } from 'react';
import { Context } from '../Helper/Context';
import { theme } from '../chakra/theme';
import { auth } from '../config/firebaseConfig';
import SeusRouter from './Router';
import { db } from '../config/firebaseConfig';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const { setUser } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // if there is a user signed in, get their info from the DB
        // then navigate to the Dashboard
        getUser(user.uid);
        navigate('/Dashboard');
      }
    });
  }, []);

  const getUser = async (userId) => {
    const userDoc = await getDoc(doc(db, 'users', userId));

    if (userDoc.exists()) {
      // userDoc exists, i.e. not a new user so get user doc and set the user context with the user information
      setUser(userDoc.data());
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <SeusRouter />
    </ChakraProvider>
  );
}
