import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Background from '../images/Background.png';
import GuitarVector from '../images/GuitarVector1.svg';
import Logo from '../images/Logo.svg';

export default function Root() {
  const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
  };
  window.addEventListener('resize', documentHeight);
  documentHeight();

  return (
    <Flex
      minH='100dvh'
      bgImage={Background}
      backgroundSize='cover'
      flexDirection='column'
      justifyContent='center'
      letterSpacing='wider'
    >
      <Flex
        w='100vw'
        h='max-content'
        justifyContent='center'
        gap='10px'
        alignItems='center'
      >
        <Image
          src={Logo}
          w='145px'
          filter='drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25))'
        />
        <Text
          fontSize='7xl'
          fontWeight={300}
          textColor='brand.primary'
          textShadow='0 4px 4px rgba(0, 0, 0, .25)'
          letterSpacing='wide'
        >
          SEUS
        </Text>
      </Flex>

      <Flex justifyContent='end'>
        <Image
          src={GuitarVector}
          width={148}
          filter='drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25))'
        />
      </Flex>

      <Flex flexDirection='column' m='20px 25px 0' gap='30px'>
        <Text fontSize='2xl' fontWeight={300} color='brand.darkGray' px='10px'>
          Online guitar courses made simple and affordable. The stage awaits!
        </Text>
        <Link to='/Welcome'>
          <Button variant='solid1'>Get Started Today</Button>
        </Link>
      </Flex>
    </Flex>
  );
}
