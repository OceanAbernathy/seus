import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Tag,
  Text,
} from '@chakra-ui/react';

import { getLevelBackgroundColor } from './TagStyles';
import { getStyleBackgroundColor } from './TagStyles';

import BeginnerLogo from '../../../images/Icons/Beginner.png';
import IntermediateLogo from '../../../images/Icons/Intermediate.png';
import AdvancedLogo from '../../../images/Icons/Advanced.png';

import BluesLogo from '../../../images/Icons/Blues.png';
import ClassicalLogo from '../../../images/Icons/Classical.png';
import MetalLogo from '../../../images/Icons/Metal.png';
import FolkLogo from '../../../images/Icons/Folk.png';
import JazzLogo from '../../../images/Icons/Jazz.png';
import BluegrassLogo from '../../../images/Icons/Bluegrass.png';
import RockLogo from '../../../images/Icons/Rock.png';
import CountryLogo from '../../../images/Icons/Country.png';
import ReggaeLogo from '../../../images/Icons/Reggae.png';
import FusionLogo from '../../../images/Icons/Fusion.png';
import FunkLogo from '../../../images/Icons/Funk.png';
import PopLogo from '../../../images/Icons/Pop.png';
import Slider from 'react-slick';
import { PlusCircle, Ruler } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../config/firebaseConfig';

export default function Explore() {
  const [lessons, setLessons] = useState([]);
  const [instructors, setInstructors] = useState([]);

  const getLessons = async () => {
    try {
      const lessonsList = await getDocs(collection(db, 'lessons'));
      const instructorList = await getDocs(collection(db, 'instructors'));

      lessonsList.forEach((doc) => {
        setLessons((prevState) => [...prevState, doc.data()]);
      });

      instructorList.forEach((doc) => {
        setInstructors((prevState) => [...prevState, doc.data()]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
  };

  useEffect(() => {
    document.title = 'Explore - SEUS';
    getLessons();
  }, []);

  return (
    <Flex height='100vh' flexDirection='column'>
      <Flex
        pt={9}
        pb={7}
        justifyContent='center'
        bgColor='brand.darkGray'
        position='relative'
      >
        <Text fontSize='3xl' fontWeight='medium' color='white'>
          Explore
        </Text>
      </Flex>

      <Flex
        flexDirection='column'
        pt={3}
        pb={20}
        px={3}
        overflow='scroll'
        height='82.5%'
      >
        <Accordion allowToggle defaultIndex={[0]}>
          <Flex flexDirection='column' gap={3}>
            {/* BEGINNER */}

            <AccordionItem
              flexDirection='column'
              bgColor='blackAlpha.300'
              py={2}
              px={3}
              border='none'
            >
              <AccordionButton gap={3}>
                <Image src={BeginnerLogo} width={10} />
                <Text
                  flex='1'
                  textAlign='left'
                  fontWeight='semibold'
                  fontSize='2xl'
                >
                  Beginner
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel px={0}>
                {lessons
                  .filter((lesson) => lesson.level === 'Beginner')
                  .map((lesson, index) => (
                    <Flex key={index} flexDirection='column'>
                      <Flex my={1} bgColor='whiteAlpha.600' position='relative'>
                        <Button variant='add' position='absolute'>
                          <Icon as={PlusCircle} />
                        </Button>
                        <Image
                          src={lesson.image}
                          boxSize='24'
                          py={2}
                          objectFit='contain'
                          bgColor={getLevelBackgroundColor(lesson.level)}
                          height='125px'
                        />
                        <Flex
                          flexDirection='column'
                          width='70%'
                          ml={2}
                          mr={1}
                          justifyContent='space-evenly'
                        >
                          <Text ml={1} fontWeight='semibold' noOfLines={1}>
                            {lesson.title}
                          </Text>
                          <Flex
                            flexWrap='wrap'
                            width='150px'
                            pr={1}
                            pb={2}
                            gap={1}
                          >
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
                          <Text ml={1} noOfLines={2}>
                            {lesson.description}
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  ))}
              </AccordionPanel>
            </AccordionItem>

            {/* INTERMEDIATE */}

            <AccordionItem
              flexDirection='column'
              bgColor='blackAlpha.300'
              py={2}
              px={3}
              border='none'
            >
              <AccordionButton gap={3}>
                <Image src={IntermediateLogo} width={10} />
                <Text
                  flex='1'
                  textAlign='left'
                  fontWeight='semibold'
                  fontSize='2xl'
                >
                  Intermediate
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel px={0}>
                {lessons
                  .filter((lesson) => lesson.level === 'Intermediate')
                  .map((lesson, index) => (
                    <Flex key={index} flexDirection='column'>
                      <Flex my={1} bgColor='whiteAlpha.600' position='relative'>
                        <Button variant='add' position='absolute'>
                          <Icon as={PlusCircle} />
                        </Button>
                        <Image
                          src={lesson.image}
                          boxSize='24'
                          py={2}
                          objectFit='contain'
                          bgColor={getLevelBackgroundColor(lesson.level)}
                          height='125px'
                        />
                        <Flex
                          flexDirection='column'
                          width='70%'
                          ml={2}
                          mr={1}
                          justifyContent='space-evenly'
                        >
                          <Text ml={1} fontWeight='semibold' noOfLines={1}>
                            {lesson.title}
                          </Text>
                          <Flex
                            flexWrap='wrap'
                            width='150px'
                            pr={1}
                            pb={2}
                            gap={1}
                          >
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
                          <Text ml={1} noOfLines={2}>
                            {lesson.description}
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  ))}
              </AccordionPanel>
            </AccordionItem>

            {/* ADVANCED */}

            <AccordionItem
              flexDirection='column'
              bgColor='blackAlpha.300'
              py={2}
              px={3}
              border='none'
            >
              <AccordionButton gap={3}>
                <Image src={AdvancedLogo} width={10} />
                <Text
                  flex='1'
                  textAlign='left'
                  fontWeight='semibold'
                  fontSize='2xl'
                >
                  Advanced
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel px={0}>
                {lessons
                  .filter((lesson) => lesson.level === 'Advanced')
                  .map((lesson, index) => (
                    <Flex
                      key={index}
                      flexDirection='column'
                      position='relative'
                    >
                      <Flex my={1} bgColor='whiteAlpha.600'>
                        <Button variant='add' position='absolute'>
                          <Icon as={PlusCircle} />
                        </Button>
                        <Image
                          src={lesson.image}
                          boxSize='24'
                          py={2}
                          objectFit='contain'
                          bgColor={getLevelBackgroundColor(lesson.level)}
                          height='125px'
                        />
                        <Flex
                          flexDirection='column'
                          width='70%'
                          ml={2}
                          mr={1}
                          justifyContent='space-evenly'
                        >
                          <Text ml={1} fontWeight='semibold' noOfLines={1}>
                            {lesson.title}
                          </Text>
                          <Flex
                            flexWrap='wrap'
                            width='150px'
                            pr={1}
                            pb={2}
                            gap={1}
                          >
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
                          <Text ml={1} noOfLines={2}>
                            {lesson.description}
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  ))}
              </AccordionPanel>
            </AccordionItem>

            <Flex py={1}>
              <Divider borderWidth='2px' />
            </Flex>

            {/* INSTRUCTORS */}

            <AccordionItem
              flexDirection='column'
              bgColor='blackAlpha.300'
              py={2}
              border='none'
            >
              <AccordionButton gap={3} px={7}>
                <Icon
                  as={Ruler}
                  boxSize={8}
                  weight='bold'
                  bgColor='whiteAlpha.600'
                  color='brand.primary'
                  borderRadius='full'
                  p='4px'
                  ml='5px'
                />
                <Text
                  flex='1'
                  textAlign='left'
                  fontWeight='semibold'
                  fontSize='2xl'
                >
                  Instructors
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel px={6}>
                <Slider {...settings}>
                  {instructors.map((user, index) => (
                    <Flex key={index}>
                      <Flex
                        flexDirection='column'
                        bgColor='rgba(225, 225, 225, .4)'
                        boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
                        pt={2}
                        pb={1}
                        mx={28}
                        width='170px'
                        alignItems='center'
                      >
                        <Flex position='relative' height='200px' width='150px'>
                          <Flex
                            bgGradient='linear(to-t, rgba(0, 0, 0, .8), transparent)'
                            position='absolute'
                            bottom='0'
                            left='0'
                            width='150px'
                            px={2}
                            zIndex={2}
                            flexDirection='column'
                          >
                            <Flex
                              width='150px'
                              pr={1}
                              py={1}
                              gap={1}
                              flexWrap='wrap'
                            >
                              {user.level.map((type, index) => (
                                <Tag
                                  key={index}
                                  size='sm'
                                  bgColor={getLevelBackgroundColor(type)}
                                >
                                  {type === 'Intermediate' ? 'Inter.' : type}
                                </Tag>
                              ))}
                            </Flex>
                            <Flex
                              flexWrap='wrap'
                              width='150px'
                              pr={1}
                              pb={2}
                              gap={1}
                            >
                              {user.style.map((type, index) => (
                                <Tag
                                  key={index}
                                  size='sm'
                                  bgColor={getStyleBackgroundColor(type)}
                                >
                                  {type}
                                </Tag>
                              ))}
                            </Flex>
                          </Flex>

                          <Image
                            src={user.image}
                            width='150px'
                            height='200px'
                            objectPosition='bottom'
                            objectFit='cover'
                            position='absolute'
                            top='0'
                            left='0'
                            right='0'
                            bottom='0'
                          />
                        </Flex>
                        <Text fontSize='md' fontWeight='semibold'>
                          {user.name}
                        </Text>
                      </Flex>
                    </Flex>
                  ))}
                </Slider>
              </AccordionPanel>
            </AccordionItem>

            <Flex py={1}>
              <Divider borderWidth='2px' />
            </Flex>

            {/* BLUES */}

            <AccordionItem
              flexDirection='column'
              bgColor='blackAlpha.300'
              py={2}
              px={3}
              border='none'
            >
              <AccordionButton gap={4}>
                <Image
                  src={BluesLogo}
                  boxSize={8}
                  weight='fill'
                  bgColor='whiteAlpha.600'
                  borderRadius='full'
                  p='4px'
                  ml='5px'
                />
                <Text
                  flex='1'
                  textAlign='left'
                  fontWeight='semibold'
                  fontSize='2xl'
                >
                  Blues
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel px={0}>
                {lessons
                  .filter((lesson) => lesson.style.indexOf('Blues') > -1)
                  .map((lesson, index) => (
                    <Flex key={index} flexDirection='column'>
                      <Flex my={1} bgColor='whiteAlpha.600' position='relative'>
                        <Button variant='add' position='absolute'>
                          <Icon as={PlusCircle} />
                        </Button>
                        <Image
                          src={lesson.image}
                          boxSize='24'
                          py={2}
                          objectFit='contain'
                          bgColor={getLevelBackgroundColor(lesson.level)}
                          height='125px'
                        />
                        <Flex
                          flexDirection='column'
                          width='70%'
                          ml={2}
                          mr={1}
                          justifyContent='space-evenly'
                        >
                          <Text ml={1} fontWeight='semibold' noOfLines={1}>
                            {lesson.title}
                          </Text>
                          <Flex
                            flexWrap='wrap'
                            width='150px'
                            pr={1}
                            pb={2}
                            gap={1}
                          >
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
                          <Text ml={1} noOfLines={2}>
                            {lesson.description}
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  ))}
              </AccordionPanel>
            </AccordionItem>

            {/* CLASSICAL */}

            <AccordionItem
              flexDirection='column'
              bgColor='blackAlpha.300'
              py={2}
              px={3}
              border='none'
            >
              <AccordionButton gap={4}>
                <Image
                  src={ClassicalLogo}
                  boxSize={8}
                  weight='fill'
                  bgColor='whiteAlpha.600'
                  borderRadius='full'
                  p='4px'
                  ml='5px'
                />
                <Text
                  flex='1'
                  textAlign='left'
                  fontWeight='semibold'
                  fontSize='2xl'
                >
                  Classical
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel px={0}>
                {lessons
                  .filter((lesson) => lesson.style.indexOf('Classical') > -1)
                  .map((lesson, index) => (
                    <Flex key={index} flexDirection='column'>
                      <Flex my={1} bgColor='whiteAlpha.600' position='relative'>
                        <Button variant='add' position='absolute'>
                          <Icon as={PlusCircle} />
                        </Button>
                        <Image
                          src={lesson.image}
                          boxSize='24'
                          py={2}
                          objectFit='contain'
                          bgColor={getLevelBackgroundColor(lesson.level)}
                          height='125px'
                        />
                        <Flex
                          flexDirection='column'
                          width='70%'
                          ml={2}
                          mr={1}
                          justifyContent='space-evenly'
                        >
                          <Text ml={1} fontWeight='semibold' noOfLines={1}>
                            {lesson.title}
                          </Text>
                          <Flex
                            flexWrap='wrap'
                            width='150px'
                            pr={1}
                            pb={2}
                            gap={1}
                          >
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
                          <Text ml={1} noOfLines={2}>
                            {lesson.description}
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  ))}
              </AccordionPanel>
            </AccordionItem>

            {/* METAL */}

            <AccordionItem
              flexDirection='column'
              bgColor='blackAlpha.300'
              py={2}
              px={3}
              border='none'
            >
              <AccordionButton gap={4}>
                <Image
                  src={MetalLogo}
                  boxSize={8}
                  weight='fill'
                  bgColor='whiteAlpha.600'
                  borderRadius='full'
                  p='4px'
                  ml='5px'
                />
                <Text
                  flex='1'
                  textAlign='left'
                  fontWeight='semibold'
                  fontSize='2xl'
                >
                  Metal
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel px={0}>
                {lessons
                  .filter((lesson) => lesson.style.indexOf('Metal') > -1)
                  .map((lesson, index) => (
                    <Flex key={index} flexDirection='column'>
                      <Flex my={1} bgColor='whiteAlpha.600' position='relative'>
                        <Button variant='add' position='absolute'>
                          <Icon as={PlusCircle} />
                        </Button>
                        <Image
                          src={lesson.image}
                          boxSize='24'
                          py={2}
                          objectFit='contain'
                          bgColor={getLevelBackgroundColor(lesson.level)}
                          height='125px'
                        />
                        <Flex
                          flexDirection='column'
                          width='70%'
                          ml={2}
                          mr={1}
                          justifyContent='space-evenly'
                        >
                          <Text ml={1} fontWeight='semibold' noOfLines={1}>
                            {lesson.title}
                          </Text>
                          <Flex
                            flexWrap='wrap'
                            width='150px'
                            pr={1}
                            pb={2}
                            gap={1}
                          >
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
                          <Text ml={1} noOfLines={2}>
                            {lesson.description}
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  ))}
              </AccordionPanel>
            </AccordionItem>

            {/* FOLK */}

            <AccordionItem
              flexDirection='column'
              bgColor='blackAlpha.300'
              py={2}
              px={3}
              border='none'
            >
              <AccordionButton gap={4}>
                <Image
                  src={FolkLogo}
                  boxSize={8}
                  weight='fill'
                  bgColor='whiteAlpha.600'
                  borderRadius='full'
                  p='4px'
                  ml='5px'
                />
                <Text
                  flex='1'
                  textAlign='left'
                  fontWeight='semibold'
                  fontSize='2xl'
                >
                  Folk
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel px={0}>
                {lessons
                  .filter((lesson) => lesson.style.indexOf('Folk') > -1)
                  .map((lesson, index) => (
                    <Flex key={index} flexDirection='column'>
                      <Flex my={1} bgColor='whiteAlpha.600' position='relative'>
                        <Button variant='add' position='absolute'>
                          <Icon as={PlusCircle} />
                        </Button>
                        <Image
                          src={lesson.image}
                          boxSize='24'
                          py={2}
                          objectFit='contain'
                          bgColor={getLevelBackgroundColor(lesson.level)}
                          height='125px'
                        />
                        <Flex
                          flexDirection='column'
                          width='70%'
                          ml={2}
                          mr={1}
                          justifyContent='space-evenly'
                        >
                          <Text ml={1} fontWeight='semibold' noOfLines={1}>
                            {lesson.title}
                          </Text>
                          <Flex
                            flexWrap='wrap'
                            width='150px'
                            pr={1}
                            pb={2}
                            gap={1}
                          >
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
                          <Text ml={1} noOfLines={2}>
                            {lesson.description}
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  ))}
              </AccordionPanel>
            </AccordionItem>

            {/* JAZZ */}

            <AccordionItem
              flexDirection='column'
              bgColor='blackAlpha.300'
              py={2}
              px={3}
              border='none'
            >
              <AccordionButton gap={4}>
                <Image
                  src={JazzLogo}
                  boxSize={8}
                  weight='fill'
                  bgColor='whiteAlpha.600'
                  borderRadius='full'
                  p='4px'
                  ml='5px'
                />
                <Text
                  flex='1'
                  textAlign='left'
                  fontWeight='semibold'
                  fontSize='2xl'
                >
                  Jazz
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel px={0}>
                {lessons
                  .filter((lesson) => lesson.style.indexOf('Jazz') > -1)
                  .map((lesson, index) => (
                    <Flex key={index} flexDirection='column'>
                      <Flex my={1} bgColor='whiteAlpha.600' position='relative'>
                        <Button variant='add' position='absolute'>
                          <Icon as={PlusCircle} />
                        </Button>
                        <Image
                          src={lesson.image}
                          boxSize='24'
                          py={2}
                          objectFit='contain'
                          bgColor={getLevelBackgroundColor(lesson.level)}
                          height='125px'
                        />
                        <Flex
                          flexDirection='column'
                          width='70%'
                          ml={2}
                          mr={1}
                          justifyContent='space-evenly'
                        >
                          <Text ml={1} fontWeight='semibold' noOfLines={1}>
                            {lesson.title}
                          </Text>
                          <Flex
                            flexWrap='wrap'
                            width='150px'
                            pr={1}
                            pb={2}
                            gap={1}
                          >
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
                          <Text ml={1} noOfLines={2}>
                            {lesson.description}
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  ))}
              </AccordionPanel>
            </AccordionItem>

            {/* BLUEGRASS */}

            <AccordionItem
              flexDirection='column'
              bgColor='blackAlpha.300'
              py={2}
              px={3}
              border='none'
            >
              <AccordionButton gap={4}>
                <Image
                  src={BluegrassLogo}
                  boxSize={8}
                  weight='fill'
                  bgColor='whiteAlpha.600'
                  borderRadius='full'
                  p='4px'
                  ml='5px'
                />
                <Text
                  flex='1'
                  textAlign='left'
                  fontWeight='semibold'
                  fontSize='2xl'
                >
                  Bluegrass
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel px={0}>
                {lessons
                  .filter((lesson) => lesson.style.indexOf('Bluegrass') > -1)
                  .map((lesson, index) => (
                    <Flex key={index} flexDirection='column'>
                      <Flex my={1} bgColor='whiteAlpha.600' position='relative'>
                        <Button variant='add' position='absolute'>
                          <Icon as={PlusCircle} />
                        </Button>
                        <Image
                          src={lesson.image}
                          boxSize='24'
                          py={2}
                          objectFit='contain'
                          bgColor={getLevelBackgroundColor(lesson.level)}
                          height='125px'
                        />
                        <Flex
                          flexDirection='column'
                          width='70%'
                          ml={2}
                          mr={1}
                          justifyContent='space-evenly'
                        >
                          <Text ml={1} fontWeight='semibold' noOfLines={1}>
                            {lesson.title}
                          </Text>
                          <Flex
                            flexWrap='wrap'
                            width='150px'
                            pr={1}
                            pb={2}
                            gap={1}
                          >
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
                          <Text ml={1} noOfLines={2}>
                            {lesson.description}
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  ))}
              </AccordionPanel>
            </AccordionItem>

            {/* ROCK */}

            <AccordionItem
              flexDirection='column'
              bgColor='blackAlpha.300'
              py={2}
              px={3}
              border='none'
            >
              <AccordionButton gap={4}>
                <Image
                  src={RockLogo}
                  boxSize={8}
                  weight='fill'
                  bgColor='whiteAlpha.600'
                  borderRadius='full'
                  p='4px'
                  ml='5px'
                />
                <Text
                  flex='1'
                  textAlign='left'
                  fontWeight='semibold'
                  fontSize='2xl'
                >
                  Rock
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel px={0}>
                {lessons
                  .filter((lesson) => lesson.style.indexOf('Rock') > -1)
                  .map((lesson, index) => (
                    <Flex key={index} flexDirection='column'>
                      <Flex my={1} bgColor='whiteAlpha.600' position='relative'>
                        <Button variant='add' position='absolute'>
                          <Icon as={PlusCircle} />
                        </Button>
                        <Image
                          src={lesson.image}
                          boxSize='24'
                          py={2}
                          objectFit='contain'
                          bgColor={getLevelBackgroundColor(lesson.level)}
                          height='125px'
                        />
                        <Flex
                          flexDirection='column'
                          width='70%'
                          ml={2}
                          mr={1}
                          justifyContent='space-evenly'
                        >
                          <Text ml={1} fontWeight='semibold' noOfLines={1}>
                            {lesson.title}
                          </Text>
                          <Flex
                            flexWrap='wrap'
                            width='150px'
                            pr={1}
                            pb={2}
                            gap={1}
                          >
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
                          <Text ml={1} noOfLines={2}>
                            {lesson.description}
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  ))}
              </AccordionPanel>
            </AccordionItem>

            {/* COUNTRY */}

            <AccordionItem
              flexDirection='column'
              bgColor='blackAlpha.300'
              py={2}
              px={3}
              border='none'
            >
              <AccordionButton gap={4}>
                <Image
                  src={CountryLogo}
                  boxSize={8}
                  weight='fill'
                  bgColor='whiteAlpha.600'
                  borderRadius='full'
                  p='4px'
                  ml='5px'
                />
                <Text
                  flex='1'
                  textAlign='left'
                  fontWeight='semibold'
                  fontSize='2xl'
                >
                  Country
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel px={0}>
                {lessons
                  .filter((lesson) => lesson.style.indexOf('Country') > -1)
                  .map((lesson, index) => (
                    <Flex key={index} flexDirection='column'>
                      <Flex my={1} bgColor='whiteAlpha.600' position='relative'>
                        <Button variant='add' position='absolute'>
                          <Icon as={PlusCircle} />
                        </Button>
                        <Image
                          src={lesson.image}
                          boxSize='24'
                          py={2}
                          objectFit='contain'
                          bgColor={getLevelBackgroundColor(lesson.level)}
                          height='125px'
                        />
                        <Flex
                          flexDirection='column'
                          width='70%'
                          ml={2}
                          mr={1}
                          justifyContent='space-evenly'
                        >
                          <Text ml={1} fontWeight='semibold' noOfLines={1}>
                            {lesson.title}
                          </Text>
                          <Flex
                            flexWrap='wrap'
                            width='150px'
                            pr={1}
                            pb={2}
                            gap={1}
                          >
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
                          <Text ml={1} noOfLines={2}>
                            {lesson.description}
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  ))}
              </AccordionPanel>
            </AccordionItem>

            {/* REGGAE */}

            <AccordionItem
              flexDirection='column'
              bgColor='blackAlpha.300'
              py={2}
              px={3}
              border='none'
            >
              <AccordionButton gap={4}>
                <Image
                  src={ReggaeLogo}
                  boxSize={8}
                  weight='fill'
                  bgColor='whiteAlpha.600'
                  borderRadius='full'
                  p='4px'
                  ml='5px'
                />
                <Text
                  flex='1'
                  textAlign='left'
                  fontWeight='semibold'
                  fontSize='2xl'
                >
                  Reggae
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel px={0}>
                {lessons
                  .filter((lesson) => lesson.style.indexOf('Reggae') > -1)
                  .map((lesson, index) => (
                    <Flex key={index} flexDirection='column'>
                      <Flex my={1} bgColor='whiteAlpha.600' position='relative'>
                        <Button variant='add' position='absolute'>
                          <Icon as={PlusCircle} />
                        </Button>
                        <Image
                          src={lesson.image}
                          boxSize='24'
                          py={2}
                          objectFit='contain'
                          bgColor={getLevelBackgroundColor(lesson.level)}
                          height='125px'
                        />
                        <Flex
                          flexDirection='column'
                          width='70%'
                          ml={2}
                          mr={1}
                          justifyContent='space-evenly'
                        >
                          <Text ml={1} fontWeight='semibold' noOfLines={1}>
                            {lesson.title}
                          </Text>
                          <Flex
                            flexWrap='wrap'
                            width='150px'
                            pr={1}
                            pb={2}
                            gap={1}
                          >
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
                          <Text ml={1} noOfLines={2}>
                            {lesson.description}
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  ))}
              </AccordionPanel>
            </AccordionItem>

            {/* FUSION */}

            <AccordionItem
              flexDirection='column'
              bgColor='blackAlpha.300'
              py={2}
              px={3}
              border='none'
            >
              <AccordionButton gap={4}>
                <Image
                  src={FusionLogo}
                  boxSize={8}
                  weight='fill'
                  bgColor='whiteAlpha.600'
                  borderRadius='full'
                  p='4px'
                  ml='5px'
                />
                <Text
                  flex='1'
                  textAlign='left'
                  fontWeight='semibold'
                  fontSize='2xl'
                >
                  Fusion
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel px={0}>
                {lessons
                  .filter((lesson) => lesson.style.indexOf('Fusion') > -1)
                  .map((lesson, index) => (
                    <Flex key={index} flexDirection='column'>
                      <Flex my={1} bgColor='whiteAlpha.600' position='relative'>
                        <Button variant='add' position='absolute'>
                          <Icon as={PlusCircle} />
                        </Button>
                        <Image
                          src={lesson.image}
                          boxSize='24'
                          py={2}
                          objectFit='contain'
                          bgColor={getLevelBackgroundColor(lesson.level)}
                          height='125px'
                        />
                        <Flex
                          flexDirection='column'
                          width='70%'
                          ml={2}
                          mr={1}
                          justifyContent='space-evenly'
                        >
                          <Text ml={1} fontWeight='semibold' noOfLines={1}>
                            {lesson.title}
                          </Text>
                          <Flex
                            flexWrap='wrap'
                            width='150px'
                            pr={1}
                            pb={2}
                            gap={1}
                          >
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
                          <Text ml={1} noOfLines={2}>
                            {lesson.description}
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  ))}
              </AccordionPanel>
            </AccordionItem>

            {/* FUNK */}

            <AccordionItem
              flexDirection='column'
              bgColor='blackAlpha.300'
              py={2}
              px={3}
              border='none'
            >
              <AccordionButton gap={4}>
                <Image
                  src={FunkLogo}
                  boxSize={8}
                  weight='fill'
                  bgColor='whiteAlpha.600'
                  borderRadius='full'
                  p='4px'
                  ml='5px'
                />
                <Text
                  flex='1'
                  textAlign='left'
                  fontWeight='semibold'
                  fontSize='2xl'
                >
                  Funk
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel px={0}>
                {lessons
                  .filter((lesson) => lesson.style.indexOf('Funk') > -1)
                  .map((lesson, index) => (
                    <Flex key={index} flexDirection='column'>
                      <Flex my={1} bgColor='whiteAlpha.600' position='relative'>
                        <Button variant='add' position='absolute'>
                          <Icon as={PlusCircle} />
                        </Button>
                        <Image
                          src={lesson.image}
                          boxSize='24'
                          py={2}
                          objectFit='contain'
                          bgColor={getLevelBackgroundColor(lesson.level)}
                          height='125px'
                        />
                        <Flex
                          flexDirection='column'
                          width='70%'
                          ml={2}
                          mr={1}
                          justifyContent='space-evenly'
                        >
                          <Text ml={1} fontWeight='semibold' noOfLines={1}>
                            {lesson.title}
                          </Text>
                          <Flex
                            flexWrap='wrap'
                            width='150px'
                            pr={1}
                            pb={2}
                            gap={1}
                          >
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
                          <Text ml={1} noOfLines={2}>
                            {lesson.description}
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  ))}
              </AccordionPanel>
            </AccordionItem>

            {/* POP */}

            <AccordionItem
              flexDirection='column'
              bgColor='blackAlpha.300'
              py={2}
              px={3}
              border='none'
            >
              <AccordionButton gap={4}>
                <Image
                  src={PopLogo}
                  boxSize={8}
                  weight='fill'
                  bgColor='whiteAlpha.600'
                  borderRadius='full'
                  p='4px'
                  ml='5px'
                />
                <Text
                  flex='1'
                  textAlign='left'
                  fontWeight='semibold'
                  fontSize='2xl'
                >
                  Pop
                </Text>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel px={0}>
                {lessons
                  .filter((lesson) => lesson.style.indexOf('Pop') > -1)
                  .map((lesson, index) => (
                    <Flex key={index} flexDirection='column'>
                      <Flex my={1} bgColor='whiteAlpha.600' position='relative'>
                        <Button variant='add' position='absolute'>
                          <Icon as={PlusCircle} />
                        </Button>
                        <Image
                          src={lesson.image}
                          boxSize='24'
                          py={2}
                          objectFit='contain'
                          bgColor={getLevelBackgroundColor(lesson.level)}
                          height='125px'
                        />
                        <Flex
                          flexDirection='column'
                          width='70%'
                          ml={2}
                          mr={1}
                          justifyContent='space-evenly'
                        >
                          <Text ml={1} fontWeight='semibold' noOfLines={1}>
                            {lesson.title}
                          </Text>
                          <Flex
                            flexWrap='wrap'
                            width='150px'
                            pr={1}
                            pb={2}
                            gap={1}
                          >
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
                          <Text ml={1} noOfLines={2}>
                            {lesson.description}
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  ))}
              </AccordionPanel>
            </AccordionItem>
          </Flex>
        </Accordion>
      </Flex>
    </Flex>
  );
}
