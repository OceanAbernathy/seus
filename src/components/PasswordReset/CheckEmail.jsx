import { Button, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Background from '../../images/Background.png';
import Background2 from '../../images/Background2.png';

import { EnvelopeOpen } from '@phosphor-icons/react';

export default function SignIn() {
  return (
    <Flex
      height='100vh'
      bgImage={Background}
      backgroundSize='cover'
      position='relative'
    >
      <Flex flexDirection='column' justifyContent='center' gap='50px'>
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

        <Flex flexDirection='column' gap='40px' alignItems='center'>
          <Link to='/CreateNewPassword'>
            <Button
              variant='solid1'
              w='max-content'
              _hover={{ bgColor: '#00a078' }}
            >
              <Text mx='10'>Open email app</Text>
            </Button>
          </Link>
          <Link to='/SignIn'>
            <Text>Skip, I'll confirm later</Text>
          </Link>
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
    </Flex>
  );
}
