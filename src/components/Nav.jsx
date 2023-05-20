import { Flex, IconButton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
  House,
  ClipboardText,
  Globe,
  Guitar,
  User,
} from '@phosphor-icons/react';

export default function Nav() {
  return (
    <Flex
      position='absolute'
      width='100%'
      justifyContent='space-evenly'
      pt={6}
      pb={10}
      bgColor='brand.primary'
    >
      <Link to='/Dashboard'>
        <IconButton icon={<House />} variant='nav' />
      </Link>
      <Link to='Lessons'>
        <IconButton icon={<ClipboardText />} variant='nav' />
      </Link>
      <Link to='Challenges'>
        <IconButton icon={<Guitar />} variant='nav' />
      </Link>
      <Link to='Explore'>
        <IconButton icon={<Globe />} variant='nav' />
      </Link>
      <Link to='Profile'>
        <IconButton icon={<User />} variant='nav' />
      </Link>
    </Flex>
  );
}
