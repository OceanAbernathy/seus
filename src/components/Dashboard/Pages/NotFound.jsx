import { useEffect } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Background from '../../../images/Background3.png';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Not Found - SEUS';
  }, []);

  return (
    <Flex
      h='100vh'
      bgImage={Background}
      backgroundSize='cover'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      gap='50px'
      letterSpacing='widest'
    >
      <Text fontSize='4xl' fontWeight='semibold'>
        Page Not Found!
      </Text>
      <Link to='/Dashboard'>
        <Button px={8} fontSize='lg'>
          Return
        </Button>
      </Link>
    </Flex>
  );
}
