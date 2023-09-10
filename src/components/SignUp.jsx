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
import { useContext, useEffect, useState } from 'react';
import { Context } from '../Helper/Context';

import { validEmail, validPassword } from './Regex';

export default function SignUp() {
  const {
    user,
    setUser,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    setError,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
  } = useContext(Context);

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const isInvalid =
    displayName === '' ||
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
    } else {
      signUp();
    }
  };

  const signUp = async () => {
    try {
      let newUser = await createUserWithEmailAndPassword(auth, email, password);
      // set user context with this information to be used at a later time
      setUser({
        uid: newUser.user.uid,
        personalInfo: {
          displayName: displayName,
        },
      });
      navigate('/Intro');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = 'Sign Up - SEUS';
    setError('');
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
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
          <Text
            width='fit-content'
            position='absolute'
            top={-2}
            px={2}
            ml='22px'
            fontSize='lg'
            bgColor='#B69ED9'
            borderRadius={20}
            zIndex={1}
          >
            Full Name
          </Text>
          <Input
            position='relative'
            onChange={({ target }) =>
              setDisplayName(target.value) ||
              setEmailError('') ||
              setPasswordError('') ||
              setError('')
            }
            value={displayName}
            id='name'
            type='name'
            placeholder='John Doe'
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='email' />
          <Text
            width='fit-content'
            position='absolute'
            top={-2}
            px={2}
            ml='22px'
            fontSize='lg'
            bgColor='#B69ED9'
            borderRadius={20}
            zIndex={1}
          >
            Email Address
          </Text>
          <Input
            position='relative'
            onChange={({ target }) =>
              setEmail(target.value) ||
              setEmailError('') ||
              setPasswordError('') ||
              setError('')
            }
            value={email}
            id='email'
            type='email'
            placeholder='johndoe@gmail.com'
          />
        </FormControl>
        <PasswordField />
        <Flex position='absolute' bottom={-12} flexWrap='wrap'>
          {emailError && (
            <Text
              fontSize='sm'
              fontWeight='medium'
              letterSpacing={0.25}
              color='red'
              ml={4}
            >
              Your email is invalid.
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
              Your password is invalid.
            </Text>
          )}
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
