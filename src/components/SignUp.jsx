import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import Background from '../images/Background3.png';
import { DoublePasswordField as PasswordField } from './PasswordField';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useContext, useEffect } from 'react';
import { Context } from '../Helper/Context';

export default function SingUp() {
  const {
    fullName,
    setFullName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    setError,
  } = useContext(Context);

  const isInvalid =
    fullName === '' ||
    email === '' ||
    password.length < 6 ||
    confirmPassword.length < 6;

  const navigate = useNavigate();

  function validateForm() {
    if (password !== confirmPassword) {
      setError('Error: both passwords must match!');
    }
    if (email.indexOf('@') === -1 || email.length < 8) {
      setError('Error: invalid email!');
    }
  }

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/Intro');
    } catch (err) {
      console.error(err);
      validateForm();
      setFullName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  useEffect(() => {
    document.title = 'Sign Up - SEUS';
  }, []);

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
          <Input
            onChange={({ target }) => setFullName(target.value)}
            id='name'
            type='name'
            placeholder='Full Name'
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='email' />
          <Input
            onChange={({ target }) => setEmail(target.value)}
            id='email'
            type='email'
            placeholder='Email'
          />
        </FormControl>
        <PasswordField />
        {error && (
          <Text
            fontSize='sm'
            fontWeight='medium'
            letterSpacing={0.25}
            color='red'
            ml={4}
          >
            {error}
          </Text>
        )}
        <Text></Text>
      </Flex>

      <Flex flexDirection='column' m='0 25px' gap='40px'>
        <Button
          isDisabled={isInvalid}
          onClick={signUp}
          variant='solid1'
          _hover={{ bgColor: '#6B44A4' }}
        >
          Sign Up
        </Button>
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
