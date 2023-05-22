import {
  Button,
  Flex,
  IconButton,
  Slide,
  useDisclosure,
} from '@chakra-ui/react';
import { List, X } from '@phosphor-icons/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context';
import Background from '../../images/Background2.png';
import { NavData } from './NavData';

export default function HamburgerMenu() {
  const { isOpen, onToggle } = useDisclosure();
  const { setItems } = useContext(Context);

  const toggle = (item) => {
    setItems(item);
    onToggle();
  };

  return (
    <>
      <Flex position='fixed' top='36px' right='16px' align='center'>
        <IconButton
          aria-label='Open Menu'
          size='lg'
          icon={<List />}
          variant='hamburger'
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
          {NavData.map((item) => (
            <Flex
              key={item.id}
              flexDirection='column'
              gap={20}
              alignItems='center'
            >
              <Link to={item.path} onClick={() => toggle(item)}>
                <Button aria-label={item.label} variant='ghost' p={5}>
                  {item.label}
                </Button>
              </Link>
            </Flex>
          ))}
          <IconButton icon={<X />} onClick={onToggle} variant='close' />
        </Flex>
      </Slide>
    </>
  );
}
