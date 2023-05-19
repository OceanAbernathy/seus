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
    <Flex width='100vw' alignItems='end' justifyContent='center'>
      <Link to='home'>
        <IconButton as={House} variant='close' />
      </Link>
      <Link to='lessons'>
        <IconButton as={ClipboardText} variant='close' />
      </Link>
      <Link to='challenges'>
        <IconButton as={Guitar} variant='close' />
      </Link>
      <Link to='explore'>
        <IconButton as={Globe} variant='close' />
      </Link>
      <Link to='profile'>
        <IconButton as={User} variant='close' />
      </Link>
    </Flex>
  );
}
