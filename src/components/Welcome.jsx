import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Background from '../images/Background2.png';
import GuitarVector from '../images/GuitarVector2.svg';
import { useEffect } from 'react';

export default function Welcome() {
  useEffect(() => {
    document.title = 'Welcome - SEUS';
  }, []);

  return (
    <Flex
      h='100vh'
      bgImage={Background}
      backgroundSize='cover'
      flexDirection='column'
      justifyContent='center'
      gap='40px'
      letterSpacing='widest'
    >
      <Flex width='100vw' flexDirection='column' lineHeight='1.2' px='7'>
        <Text
          fontSize='4rem'
          fontWeight={600}
          textShadow='0 4px 4px rgba(0, 0, 0, .25)'
        >
          HELLO
        </Text>
        <Text
          fontSize='1.1rem'
          fontWeight={400}
          textShadow='0 4px 4px rgba(0, 0, 0, .25)'
        >
          Start your musical journey with us.
        </Text>
      </Flex>

      <Flex mb='20px'>
        <Image
          src={GuitarVector}
          filter='drop-shadow(0 2px 2px rgba(0, 0, 0, 0.25))'
        />
      </Flex>

      <Flex flexDirection='column' m='0 25px' gap='20px'>
        <Link to='/SignIn'>
          <Button variant='solid2'>Sign In</Button>
        </Link>
        <Link to='/SignUp'>
          <Button variant='solid3'>Sign Up</Button>
        </Link>
      </Flex>
    </Flex>
  );
}
