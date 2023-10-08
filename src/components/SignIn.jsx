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
import { SinglePasswordField as PasswordField } from './PasswordField';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../Helper/Context';
import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../config/firebaseConfig';

export default function SignIn() {
  const { password, setPassword } = useContext(Context);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const isInvalid = email === '' || password.length < 6;

  const sessionPersistence = () => {
    setPersistence(auth, browserSessionPersistence).then(() => {
      return signIn();
    });
  };

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/Dashboard');
    } catch (err) {
      if (err.message === 'Firebase: Error (auth/user-not-found).') {
        setError('Invalid email or password. Please try again.');
      } else if (err.message === 'Firebase: Error (auth/invalid-email).') {
        setError('Invalid email or password. Please try again.');
      } else if (err.message === 'Firebase: Error (auth/wrong-password).') {
        setError('Invalid email or password. Please try again.');
      } else {
        setError(err.message);
        console.log(err);
      }
      setEmail('');
      setPassword('');
    }
  };

  useEffect(() => {
    document.title = 'Sign In - SEUS';
    setError('');
    setEmail('');
    setPassword('');
  }, []);

  return (
    <Flex
      minH='100dvh'
      bgImage={Background}
      backgroundSize='cover'
      flexDirection='column'
      justifyContent='center'
      gap='60px'
      pt='20px'
    >
      <Flex width='100vw' flexDirection='column' lineHeight='1.2' px='7'>
        <Text
          fontSize='3.5rem'
          fontWeight={600}
          textShadow='0 4px 4px rgba(0, 0, 0, .25)'
          textTransform='uppercase'
        >
          Welcome Back
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
          <FormLabel htmlFor='email' />
          <Input
            onChange={({ target }) => setEmail(target.value) || setError('')}
            value={email}
            id='email'
            type='email'
            placeholder='Email'
          />
        </FormControl>
        <PasswordField />
        <Flex position='absolute' bottom={-10} flexWrap='wrap'>
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

      <Flex flexDirection='column' m='0 25px' gap='60px'>
        <Flex flexDirection='column' align='center' gap='20px'>
          <Button
            isDisabled={isInvalid}
            onClick={sessionPersistence}
            variant='solid2'
          >
            Sign In
          </Button>
          <Link to='/ResetPassword'>
            <Text fontSize='lg' fontWeight='500'>
              Forgot password?
            </Text>
          </Link>
        </Flex>

        <Flex w='100%' justifyContent='center' gap='15px'>
          <Text fontSize='lg' fontWeight='500'>
            Don't have an account?
          </Text>
          <Link to='/SignUp'>
            <Text fontSize='lg' fontWeight='500'>
              Sign Up
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
