import { Route, Routes } from 'react-router-dom';
import HamburgerMenu from '../HamburgerMenu';
import Nav from '../Nav';
import { Flex } from '@chakra-ui/react';
import Home from './Home';
import Lessons from './Lessons';
import Challenges from './Challenges';
import Explore from './Explore';
import Profile from './Profile';

import Background from '../../images/Background2.png';

export default function Dashboard() {
  return (
    <Flex
      width='100vw'
      height='100vh'
      position='relative'
      flexDirection='column'
      zIndex={1}
      bgImage={Background}
      bgSize='cover'
    >
      <HamburgerMenu />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Lessons' element={<Lessons />} />
        <Route path='Challenges' element={<Challenges />} />
        <Route path='Explore' element={<Explore />} />
        <Route path='Profile' element={<Profile />} />
      </Routes>

      <Flex height='100vh' alignItems='end' zIndex={-1}>
        <Nav />
      </Flex>
    </Flex>
  );
}
