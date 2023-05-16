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
import { DoublePasswordField as PasswordField } from './PasswordField';

export default function SingUp() {
  return (
    <Flex
      h='100vh'
      bgImage={Background}
      backgroundSize='cover'
      flexDirection='column'
      justifyContent='center'
      gap='55px'
    >
      <Flex width='100vw' flexDirection='column' px='7'>
        <Text
          fontSize='4rem'
          fontWeight={600}
          textShadow='0 4px 4px rgba(0, 0, 0, .25)'
          textTransform='uppercase'
        >
          Sign Up
        </Text>
      </Flex>

      <Flex flexDirection='column' w='90vw' m='0 auto' gap='15px'>
        <FormControl>
          <FormLabel htmlFor='name' />
          <Input id='name' type='name' placeholder='Name' />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='email' />
          <Input id='email' type='email' placeholder='Email' />
        </FormControl>
        <PasswordField />
      </Flex>

      <Flex flexDirection='column' m='0 25px' gap='40px'>
        <Link to='/Intro'>
          <Button variant='solid1' _hover={{ bgColor: '#6B44A4' }}>
            Sign Up
          </Button>
        </Link>
        <Flex w='100%' justifyContent='center' gap='15px'>
          <Text fontSize='lg' fontWeight='500'>
            Already have an account?
          </Text>
          <Link to='/SignIn'>
            <Text
              fontSize='lg'
              fontWeight='500'
              _hover={{ textColor: 'white' }}
            >
              Sign In
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
