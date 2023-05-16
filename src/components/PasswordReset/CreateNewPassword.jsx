import { Button, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Background from '../../images/Background2.png';

import { ArrowLeft } from '@phosphor-icons/react';
import { CreateNewPasswordField as PasswordField } from '../PasswordField';

export default function CreateNewPassword() {
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

      <Flex h='100%' flexDirection='column' justifyContent='center' gap='40px'>
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
            Create new password
          </Text>
          <Text fontSize='lg'>
            Your new password must be different from previous used passwords.
          </Text>
        </Flex>

        <Flex flexDirection='column' m='0 auto' w='90vw' gap='12'>
          <PasswordField />
          <Link to='/SignUp'>
            <Button variant='solid2' _hover={{ bgColor: '#00a078' }}>
              Reset Password
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
