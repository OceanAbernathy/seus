import {
  Flex,
  Image,
  Text,
  Progress,
  SimpleGrid,
  GridItem,
  Icon,
  Tag,
  Avatar,
} from '@chakra-ui/react';
import { Users } from '../UsersData';
import { auth } from '../../../config/firebase';
import { getLevelBackgroundColor, getStyleBackgroundColor } from './TagStyles';
import { BookOpenText, CaretDown, Star } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Flex height='100vh' flexDirection='column'>
      <Flex
        pt={9}
        pb={7}
        justifyContent='center'
        bgColor='brand.darkGray'
        position='relative'
      >
        <Avatar
          position='absolute'
          left={4}
          name='Ocean Abernathy'
          bgColor='brand.lightGray'
          color='brand.primary'
        />
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
          <Flex alignItems='center' gap={2} mb={1} pt={2} pb={3}>
            <Icon
              boxSize={8}
              as={BookOpenText}
              color='brand.primary'
              weight='bold'
              bgColor='whiteAlpha.600'
              borderRadius='full'
              p='5px'
            />
            <Text fontWeight='semibold' fontSize='2xl'>
              Your Lessons
            </Text>
          </Flex>
          {Users.map((user, index) => (
            <Flex key={index} flexDirection='column'>
              {user.lessons.slice(0, 2).map((lesson, index) => (
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
                    <Flex flexWrap='wrap' width='150px' pr={1}>
                      <Flex noOfLines={1}>
                        <Tag
                          size='sm'
                          bgColor={getLevelBackgroundColor(lesson.level)}
                          mr={1}
                        >
                          {lesson.level}
                        </Tag>
                        {lesson.style.map((item, index) => (
                          <Tag
                            key={index}
                            size='sm'
                            bgColor={getStyleBackgroundColor(item)}
                            mr={1}
                          >
                            {item}
                          </Tag>
                        ))}
                      </Flex>
                    </Flex>
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
              <Flex alignItems='center' flexDirection='column' mb={1} mt={2}>
                <Link to='./Lessons'>
                  <Text fontSize='sm' fontWeight='medium'>
                    Show More
                  </Text>
                </Link>
              </Flex>
            </Flex>
          ))}
        </Flex>
        <Flex flexDirection='column' bgColor='blackAlpha.300' py={2} px={3}>
          <Flex alignItems='center' gap={2} mb={1} pt={2} pb={3}>
            <Icon
              boxSize={8}
              as={Star}
              color='goldenrod'
              weight='fill'
              bgColor='whiteAlpha.600'
              borderRadius='full'
              p='5px'
            />
            <Text fontWeight='semibold' fontSize='2xl' my={1}>
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
                    <Tag
                      size='sm'
                      bgColor={getLevelBackgroundColor(item.level)}
                      width='fit-content'
                    >
                      {item.level}
                    </Tag>
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
