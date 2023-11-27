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
import { getLevelBackgroundColor, getStyleBackgroundColor } from './TagStyles';
import { BookOpenText } from '@phosphor-icons/react';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../../Helper/Context';
import { getLessons } from '../../../services/firebase';

export default function Lessons() {
  const { user } = useContext(Context);

  const [lessons, setLessons] = useState([]);
  const [userLessons, setUserLessons] = useState([]);

  const getUserLessons = () => {
    getLessons().then((response) => {
      setLessons(response);
      setUserLessons(
        response
          .filter(({ id }) => user.lessons.some((e) => e.id === id))
          .map((lesson, index) => {
            return {
              ...lesson,
              progress: user.lessons[index]?.progress,
            };
          })
      );
    });
  };

  useEffect(() => {
    if (user) {
      getUserLessons();
    }
    document.title = 'Lessons - SEUS';
  }, [user]);

  return (
    user && (
      <Flex minH='100dvh' flexDirection='column'>
        <Flex
          pt={5}
          pb={5}
          justifyContent='center'
          bgColor='brand.darkGray'
          position='relative'
        >
          <Text fontSize='3xl' fontWeight='medium' color='white'>
            Lessons
          </Text>
        </Flex>
        <Flex
          flexDirection='column'
          pt={3}
          pb={4}
          px={3}
          overflow='scroll'
          height='80vh'
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
            <Flex flexDirection='column'>
              {userLessons.map((lesson, index) => (
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
                    <Text ml={1} fontWeight='semibold'>
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
                    <Text ml={1} noOfLines={4}>
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
          </Flex>
        </Flex>
      </Flex>
    )
  );
}
