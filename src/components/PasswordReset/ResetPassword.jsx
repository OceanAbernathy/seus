import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { ArrowLeft } from '@phosphor-icons/react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebaseConfig';
import Background from '../../images/Background2.png';
import { validEmail } from '../Regex';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const isInvalid = email === '';

  const validateForm = () => {
    if (!validEmail.test(email)) {
      setError('Your password is invalid.');
    } else {
      triggerResetEmail();
    }
  };

  const triggerResetEmail = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      if (err.message === 'Firebase: Error (auth/user-not-found).') {
        setError('Invalid email or password. Please try again.');
      } else if (err.message === 'Firebase: Error (auth/invalid-email).') {
        setError('Invalid email or password. Please try again.');
      } else {
        setError(err.message);
        console.log(err);
      }
    }
    console.log('Password reset email sent');
    navigate('/CheckEmail');
  };

  useEffect(() => {
    setError('');
    document.title = 'Reset Your Password - SEUS';
  }, []);

  return (
    <Flex
      minH='100dvh'
      bgImage={Background}
      backgroundSize='cover'
      position='relative'
    >
      <Flex
        width='100%'
        position='absolute'
        paddingInlineStart='7'
        paddingInlineEnd='7'
        top='16'
        justifyContent='space-between'
      >
        <Link to='/SignIn'>
          <Flex alignItems='center' gap='2'>
            <ArrowLeft size={32} color='#454545' />
            <Text fontWeight='semibold'>Back</Text>
          </Flex>
        </Link>
      </Flex>

      <Flex
        h='100%'
        flexDirection='column'
        justifyContent='center'
        gap='60px'
        mt={40}
      >
        <Flex
          width='100vw'
          flexDirection='column'
          lineHeight='1.2'
          px='7'
          gap='20px'
        >
          <Text
            fontSize='4xl'
            fontWeight={600}
            textShadow='0 4px 4px rgba(0, 0, 0, .25)'
            textTransform='uppercase'
          >
            Reset Password
          </Text>
          <Text fontSize='lg'>
            Enter the email associated with your account and we'll send an email
            with instructions to reset your password.
          </Text>
        </Flex>

        <Flex flexDirection='column' w='90vw' m='0 auto' gap='20px'>
          <FormControl>
            <FormLabel htmlFor='email' />
            <Input
              onChange={({ target }) => setEmail(target.value)}
              value={email}
              id='email'
              type='email'
              placeholder='Email'
            />
          </FormControl>
          <Button
            isDisabled={isInvalid}
            onClick={validateForm}
            variant='solid1'
          >
            Send Instructions
          </Button>
          <Flex flexWrap='wrap'>
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
      </Flex>
    </Flex>
  );
}
