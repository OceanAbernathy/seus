import { ChakraProvider } from '@chakra-ui/react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useContext, useEffect } from 'react';
import { Context } from '../Helper/Context';
import { theme } from '../chakra/theme';
import { auth } from '../config/firebaseConfig';
import SeusRouter from './Router';

export default function App() {
  const db = getFirestore();
  const { setUser } = useContext(Context);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getUser(user.uid);
      }
    });
  }, []);

  const getUser = async (userId) => {
    const user = await getDoc(doc(db, 'users', userId));
    setUser(user.data());
  };

  return (
    <ChakraProvider theme={theme}>
      <SeusRouter />
    </ChakraProvider>
  );
}
