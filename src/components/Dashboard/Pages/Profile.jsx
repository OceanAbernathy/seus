import { Flex, Text } from '@chakra-ui/react';

export default function Profile() {
  return (
    <Flex height='100vh' flexDirection='column'>
      <Flex pt={9} pb={7} justifyContent='center' bgColor='brand.darkGray'>
        <Text fontSize='3xl' fontWeight='medium' color='white'>
          Profile
        </Text>
      </Flex>
    </Flex>
  );
}