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
import { auth } from '../config/firebaseConfig';
import { useContext, useEffect } from 'react';
import { Context } from '../Helper/Context';

import { validEmail, validPassword } from './Regex';

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
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
  } = useContext(Context);

  const navigate = useNavigate();

  const isInvalid =
    fullName === '' ||
    email === '' ||
    password.length < 6 ||
    confirmPassword.length < 6 ||
    password !== confirmPassword;

  const validateForm = () => {
    if (!validEmail.test(email)) {
      setEmailError(true);
    }
    if (!validPassword.test(password)) {
      setPasswordError(true);
    }
    signUp();
  };

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/Intro');
    } catch (err) {
      console.error(err);
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

      <Flex
        position='relative'
        flexDirection='column'
        w='90vw'
        m='0 auto'
        gap='15px'
      >
        <FormControl>
          <FormLabel htmlFor='name' />
          <Input
            onChange={({ target }) =>
              setFullName(target.value) ||
              setEmailError('') ||
              setPasswordError('')
            }
            value={fullName}
            id='name'
            type='name'
            placeholder='Full Name'
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='email' />
          <Input
            onChange={({ target }) =>
              setEmail(target.value) ||
              setEmailError('') ||
              setPasswordError('')
            }
            value={email}
            id='email'
            type='email'
            placeholder='Email'
          />
        </FormControl>
        <PasswordField />
        <Flex position='absolute' bottom={-12} flexDirection='column'>
          {emailError && (
            <Text
              fontSize='sm'
              fontWeight='medium'
              letterSpacing={0.25}
              color='red'
              ml={4}
            >
              Your email is invalid
            </Text>
          )}
          {passwordError && (
            <Text
              fontSize='sm'
              fontWeight='medium'
              letterSpacing={0.25}
              color='red'
              ml={4}
            >
              Your password is invalid
            </Text>
          )}
        </Flex>
      </Flex>

      <Flex flexDirection='column' m='0 25px' gap='40px'>
        <Button
          isDisabled={isInvalid}
          onClick={validateForm}
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
