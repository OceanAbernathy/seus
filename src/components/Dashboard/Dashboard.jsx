import { Flex } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import { Pages } from './Pages/Pages';

import Background from '../../images/Background2.png';

export default function Dashboard() {
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
