import {
  Flex,
  Image,
  Text,
  Progress,
  SimpleGrid,
  GridItem,
  Icon,
  Tag,
} from '@chakra-ui/react';
import { Users } from '../UsersData';
import { getLevelBackgroundColor, getStyleBackgroundColor } from './TagStyles';
import { BookOpenText } from '@phosphor-icons/react';

export default function Lessons() {
  return (
    <Flex height='100vh' flexDirection='column'>
      <Flex pt={9} pb={7} justifyContent='center' bgColor='brand.darkGray'>
        <Text fontSize='3xl' fontWeight='medium' color='white'>
          Lessons
        </Text>
      </Flex>
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
              {user.lessons.map((lesson, index) => (
                <Flex key={index} my={1} bgColor='whiteAlpha.600'>
                  <Image
                    src={lesson.image}
                    boxSize='24'
                    py={2}
                    objectFit='contain'
                    bgColor={getLevelBackgroundColor(lesson.level)}
                    height='200px'
                  />
                  <Flex
                    flexDirection='column'
                    width='70%'
                    ml={2}
                    mr={1}
                    height='200px'
                    justifyContent='space-around'
                  >
                    <Text ml={1} fontWeight='semibold' noOfLines={1}>
                      {lesson.title}
                    </Text>
                    <Flex flexWrap='wrap' width='150px' pr={1} gap={1}>
                      <Tag
                        size='sm'
                        bgColor={getLevelBackgroundColor(lesson.level)}
                      >
                        {lesson.level}
                      </Tag>
                      {lesson.style.map((item, index) => (
                        <Tag
                          key={index}
                          size='sm'
                          bgColor={getStyleBackgroundColor(item)}
                        >
                          {item}
                        </Tag>
                      ))}
                    </Flex>
                    <Text ml={1}>{lesson.description}</Text>
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
      </Flex>
    </Flex>
  );
}
