import { Button, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Background from '../../images/Background.png';
import Background2 from '../../images/Background2.png';

import { EnvelopeOpen } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

export default function SignIn() {
  const [isInvalid, setIsInvalid] = useState(true);

  useEffect(() => {
    document.title = 'Check Your Mail - SEUS';
  }, []);

  return (
    <Flex
      height='100vh'
      bgImage={Background}
      backgroundSize='cover'
      position='relative'
    >
      <Flex
        flexDirection='column'
        justifyContent='center'
        gap='50px'
        position='absolute'
        top={32}
      >
        <Flex
          flexDirection='column'
          lineHeight='1.2'
          px='7'
          gap='40px'
          alignItems='center'
        >
          <Flex
            bgImage={Background2}
            backgroundSize='cover'
            p={4}
            borderRadius={25}
          >
            <EnvelopeOpen size={80} color='#8656CD' weight='duotone' />
          </Flex>

          <Flex flexDirection='column' gap='20px'>
            <Text
              fontSize='4xl'
              fontWeight={600}
              textShadow='0 4px 4px rgba(0, 0, 0, .25)'
              textTransform='uppercase'
            >
              Check your mail
            </Text>
            <Text fontSize='lg' textAlign='center'>
              We have sent a password recover instructions to your email.
            </Text>
          </Flex>
        </Flex>

        <Flex flexDirection='column' gap='50px' alignItems='center'>
          <Link to='https://gmail.com' target='_blank'>
            <Button
              onClick={() => setIsInvalid(false)}
              variant='solid1'
              w='75vw'
            >
              <Text mx='10'>Open email app</Text>
            </Button>
          </Link>
          <Link to='/SignIn'>
            <Button
              isDisabled={isInvalid}
              variant='solid1'
              w='75vw'
              bgColor='brand.secondary'
            >
              <Text mx='10'>Sign In</Text>
            </Button>
          </Link>
        </Flex>
      </Flex>
      <Flex position='absolute' bottom='16' px='7'>
        <Text textAlign='center'>
          Did not receive the email? Check your spam filter, or{' '}
          <Link to='/ResetPassword' style={{ color: '#8656CD' }}>
            try another email address
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
}
