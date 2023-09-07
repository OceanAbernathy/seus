import { Flex } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import { Pages } from './Pages/Pages';

import Background from '../../images/Background2.png';
import { useContext, useEffect } from 'react';
import { Context } from '../../Helper/Context';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';

export default function Dashboard() {
  const { user, setUser } = useContext(Context);

  useEffect(() => {
    // if user doesnt have email field in context that means it's a brand new user,
    // so we need to get the user doc and set the user context with all the data
    if (!user.email) {
      getUser(user.uid);
    }
  }, []);

  const getUser = async (userId) => {
    const userDoc = await getDoc(doc(db, 'users', userId));
    setUser(userDoc.data());
  };

  return (
    <Flex
      width='100vw'
      height='100vh'
      position='relative'
      flexDirection='column'
      bgImage={Background}
      bgSize='cover'
    >
      <Routes>
        {Pages.map((page) => (
          <Route key={page.path} path={page.path} element={page.element} />
        ))}
      </Routes>

      <Flex alignItems='end'>
        <Nav />
      </Flex>
    </Flex>
  );
}
