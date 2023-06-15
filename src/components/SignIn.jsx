import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Background from '../images/Background3.png';
import { SinglePasswordField as PasswordField } from './PasswordField';

export default function SignIn() {
  return (
    <Flex
      h='100vh'
      bgImage={Background}
      backgroundSize='cover'
      flexDirection='column'
      justifyContent='center'
      gap='60px'
      pt='20px'
    >
      <Flex width='100vw' flexDirection='column' lineHeight='1.2' px='7'>
        <Text
          fontSize='4rem'
          fontWeight={600}
          textShadow='0 4px 4px rgba(0, 0, 0, .25)'
          textTransform='uppercase'
        >
          Welcome Back
        </Text>
      </Flex>

      <Flex flexDirection='column' w='90vw' m='0 auto' gap='15px'>
        <FormControl>
          <FormLabel htmlFor='email' />
          <Input id='email' type='email' placeholder='Email' />
        </FormControl>
        <PasswordField />
      </Flex>

      <Flex flexDirection='column' m='0 25px' gap='60px'>
        <Flex flexDirection='column' align='center' gap='20px'>
          <Link to='/Dashboard'>
            <Button
              variant='solid2'
              width='340px'
              _hover={{ bgColor: '#00a078' }}
            >
              Sign In
            </Button>
          </Link>
          <Link to='/ResetPassword'>
            <Text
              fontSize='lg'
              fontWeight='500'
              _hover={{ textColor: 'white' }}
            >
              Forgot password?
            </Text>
          </Link>
        </Flex>
        <Flex w='100%' justifyContent='center' gap='15px'>
          <Text fontSize='lg' fontWeight='500'>
            Don't have an account?
          </Text>
          <Link to='/SignUp'>
            <Text
              fontSize='lg'
              fontWeight='500'
              _hover={{ textColor: 'white' }}
            >
              Sign Up
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
