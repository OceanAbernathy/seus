import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Background from '../images/Background.png';
import GuitarVector from '../images/GuitarVector1.svg';
import Logo from '../images/Logo.svg';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';
import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

export default function Root() {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/Dashboard');
      }
    });
  });

  return (
    <Flex
      h='100vh'
      bgImage={Background}
      backgroundSize='cover'
      flexDirection='column'
      justifyContent='center'
      letterSpacing='wider'
      pt='15px'
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

      <Flex justifyContent='end' mb='25px'>
        <Image
          src={GuitarVector}
          filter='drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25))'
        />
      </Flex>

      <Flex flexDirection='column' m='0 25px' gap='50px'>
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
