import {
  Button,
  IconButton,
  useDisclosure,
  Flex,
  Slide,
} from '@chakra-ui/react';
import { List, X } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import Background from '../images/Background2.png';

export default function HamburgerMenu() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Flex position='fixed' top='36px' right='16px' align='center'>
        <IconButton
          aria-label='Open Menu'
          size='lg'
          icon={<List />}
          onClick={onToggle}
        />
      </Flex>
      <Slide direction='top' in={isOpen}>
        <Flex
          height='100vh'
          justifyContent='space-between'
          alignItems='center'
          flexDirection='column'
          py={20}
          position='relative'
          bgColor='brand.lightGrey'
          _before={{
            content: `''`,
            bgImage: `${Background}`,
            bgSize: 'cover',
            pos: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            opacity: 0.9,
          }}
        >
          <Flex flexDirection='column' gap={20} alignItems='center'>
            <Link to='/Dashboard' onClick={onToggle}>
              <Button variant='ghost' aria-label='Home' p={5}>
                Home
              </Button>
            </Link>
            <Link to='Lessons' onClick={onToggle}>
              <Button variant='ghost' aria-label='About' p={5}>
                Lessons
              </Button>
            </Link>
            <Link to='Challenges' onClick={onToggle}>
              <Button variant='ghost' aria-label='Contact' p={5}>
                Challenges
              </Button>
            </Link>
            <Link to='Explore' onClick={onToggle}>
              <Button variant='ghost' aria-label='Contact' p={5}>
                Explore
              </Button>
            </Link>
            <Link to='Profile' onClick={onToggle}>
              <Button variant='ghost' aria-label='Contact' p={5}>
                Profile
              </Button>
            </Link>
          </Flex>
          <IconButton icon={<X />} onClick={onToggle} variant='close' />
        </Flex>
      </Slide>
    </>
  );
}
