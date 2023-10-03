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

export default function ResetPassword() {
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const isInvalid = email === '';

  const triggerResetEmail = async () => {
    await sendPasswordResetEmail(auth, email);
    console.log('Password reset email sent');
    navigate('/CheckEmail');
  };

  useEffect(() => {
    document.title = 'Reset Your Password - SEUS';
  }, []);

  return (
    <Flex
      height='100vh'
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

      <Flex h='100%' flexDirection='column' justifyContent='center' gap='60px'>
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
            onClick={triggerResetEmail}
            variant='solid1'
          >
            Send Instructions
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
