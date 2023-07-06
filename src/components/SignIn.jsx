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
import { useContext, useEffect } from 'react';
import { Context } from '../Helper/Context';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function SignIn() {
  const { email, setEmail, password, setPassword, error, setError } =
    useContext(Context);

  const isInvalid = email === '' || password.length < 6;

  const navigate = useNavigate();

  function validateForm() {
    if (email.indexOf('@') === -1 || email.length < 8) {
      setError('Error: invalid email!');
    } else {
      setError(
        'Error: email or password is incorrect. Please try again or sign up below.'
      );
    }
  }

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/Dashboard');
    } catch (err) {
      console.error(err);
      validateForm();
      setEmail('');
      setPassword('');
    }
  };

  useEffect(() => {
    document.title = 'Sign In - SEUS';
  }, []);

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
      </Flex>

      <Flex flexDirection='column' m='0 25px' gap='60px'>
        <Flex flexDirection='column' align='center' gap='20px'>
          <Button
            isDisabled={isInvalid}
            onClick={signIn}
            variant='solid2'
            _hover={{ bgColor: '#00a078' }}
          >
            Sign In
          </Button>
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
