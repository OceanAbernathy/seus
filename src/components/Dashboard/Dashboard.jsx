import { Route, Routes } from 'react-router-dom';
import HamburgerMenu from '../HamburgerMenu';
import Home from './Home';
import Nav from '../Nav';
import { Flex } from '@chakra-ui/react';

export default function Dashboard() {
  return (
    <Flex width='100vw' height='100vh'>
      <HamburgerMenu />
      <Nav />

      <Routes>
        <Route path='home' element={<Home />} />
      </Routes>
    </Flex>
  );
}
