import { Flex, Image, Text } from '@chakra-ui/react';
import { Instructors } from '../Instructors';

export default function Home() {
  return (
    <Flex height='100vh' flexDirection='column'>
      <Flex pt={9} pb={7} justifyContent='center' bgColor='brand.darkGray'>
        <Text fontSize='3xl' fontWeight='medium' color='white'>
          Dashboard
        </Text>
      </Flex>
      <Flex flexDirection='column' overflow='scroll' mx={6}>
        <Text fontWeight='semibold' fontSize='2xl' my={2}>
          Your Lessons
        </Text>
        {Instructors.map((user, index) => (
          <Flex key={index}>
            <Image
              src={user.image}
              width='150px'
              height='100px'
              objectPosition='center'
              objectFit='cover'
            />
            <Text>{user.name}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
