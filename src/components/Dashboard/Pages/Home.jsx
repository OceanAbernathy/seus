import {
  Flex,
  Image,
  Text,
  Progress,
  SimpleGrid,
  GridItem,
  Icon,
} from '@chakra-ui/react';
import { Users } from '../Users';
import { auth } from '../../../config/firebase';
import { getLevelBackgroundColor } from './TagStyles';
import { BookOpenText, Star } from '@phosphor-icons/react';

export default function Home() {
  return (
    <Flex height='100vh' flexDirection='column'>
      <Flex pt={9} pb={7} justifyContent='center' bgColor='brand.darkGray'>
        <Text fontSize='3xl' fontWeight='medium' color='white'>
          Dashboard
        </Text>
      </Flex>
      <Text fontSize='2xl' color='green'>
        {auth?.currentUser?.email}
      </Text>
      <Flex
        flexDirection='column'
        pt={3}
        pb={20}
        px={3}
        overflow='scroll'
        height='82.5%'
        gap={3}
      >
        <Flex flexDirection='column' bgColor='blackAlpha.300' py={2} px={3}>
          <Flex alignItems='center' gap={1}>
            <Icon
              boxSize={10}
              as={BookOpenText}
              color='brand.primary'
              weight='bold'
              bgColor='whiteAlpha.600'
              borderRadius='full'
              p='6px'
            />
            <Text fontWeight='semibold' fontSize='3xl' my={1}>
              Your Lessons
            </Text>
          </Flex>
          {Users.map((user, index) => (
            <Flex key={index} flexDirection='column'>
              {user.lessons.map((lesson, index) => (
                <Flex
                  key={index}
                  my={1}
                  alignItems='center'
                  bgColor='whiteAlpha.600'
                >
                  <Image
                    src={lesson.image}
                    boxSize='24'
                    py={2}
                    objectFit='contain'
                    bgColor={getLevelBackgroundColor(lesson.level)}
                    height='125px'
                  />
                  <Flex flexDirection='column' width='70%' ml={2} mr={1}>
                    <Text ml={1} fontWeight='semibold' noOfLines={1}>
                      {lesson.title}
                    </Text>
                    <Text
                      width='fit-content'
                      fontSize='sm'
                      borderRadius='lg'
                      px={1}
                      bgColor={getLevelBackgroundColor(lesson.level)}
                    >
                      {lesson.level}
                    </Text>
                    <Text ml={1} noOfLines={2}>
                      {lesson.description}
                    </Text>
                    <SimpleGrid columns={4} alignItems='center'>
                      <GridItem colSpan={3}>
                        <Progress size='xs' value={lesson.progress} />
                      </GridItem>
                      <GridItem>
                        <Text ml={3}>{lesson.progress}%</Text>
                      </GridItem>
                    </SimpleGrid>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          ))}
        </Flex>
        <Flex flexDirection='column' bgColor='blackAlpha.300' py={2} px={3}>
          <Flex alignItems='center' gap={1}>
            <Icon
              boxSize={10}
              as={Star}
              color='goldenrod'
              weight='fill'
              bgColor='whiteAlpha.600'
              borderRadius='full'
              p='6px'
            />
            <Text fontWeight='semibold' fontSize='3xl' my={1}>
              Your Achievements
            </Text>
          </Flex>
          {Users.map((user, index) => (
            <Flex key={index} flexDirection='column'>
              {user.achievements.map((item, index) => (
                <Flex
                  key={index}
                  my={1}
                  alignItems='center'
                  bgColor='whiteAlpha.600'
                >
                  <Flex flexDirection='column' ml={2} mr={1}>
                    <Text ml={1} fontWeight='semibold' noOfLines={1}>
                      {item.title}
                    </Text>
                    <Text
                      width='fit-content'
                      fontSize='sm'
                      borderRadius='lg'
                      px={1}
                      bgColor={getLevelBackgroundColor(item.level)}
                    >
                      {item.level}
                    </Text>
                    <Text ml={1} noOfLines={2}>
                      {item.description}
                    </Text>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
