import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Divider,
  Flex,
  Image,
  Tag,
  Text,
} from '@chakra-ui/react';

import { Lessons as LessonsData } from '../LessonsData';

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

export default function Explore() {
  return (
    <Flex height='100vh' flexDirection='column'>
      <Flex pt={9} pb={7} justifyContent='center' bgColor='brand.darkGray'>
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
                {LessonsData.filter(
                  (lesson) => lesson.level === 'Beginner'
                ).map((lesson, index) => (
                  <Flex key={index} flexDirection='column'>
                    <Flex my={1} bgColor='whiteAlpha.600'>
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
              <AccordionPanel>
                {LessonsData.filter(
                  (lesson) => lesson.level === 'Intermediate'
                ).map((lesson, index) => (
                  <Flex key={index} flexDirection='column'>
                    <Flex my={1} bgColor='whiteAlpha.600'>
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
              <AccordionPanel>
                {LessonsData.filter(
                  (lesson) => lesson.level === 'Advanced'
                ).map((lesson, index) => (
                  <Flex key={index} flexDirection='column'>
                    <Flex my={1} bgColor='whiteAlpha.600'>
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
                  stroke='red'
                  fill='red'
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
              <AccordionPanel>
                {LessonsData.filter(
                  (lesson) => lesson.style.indexOf('Blues') > -1
                ).map((lesson, index) => (
                  <Flex key={index} flexDirection='column'>
                    <Flex my={1} bgColor='whiteAlpha.600'>
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
                  stroke='red'
                  fill='red'
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
              <AccordionPanel>
                {LessonsData.filter(
                  (lesson) => lesson.style.indexOf('Classical') > -1
                ).map((lesson, index) => (
                  <Flex key={index} flexDirection='column'>
                    <Flex my={1} bgColor='whiteAlpha.600'>
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
                  stroke='red'
                  fill='red'
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
              <AccordionPanel>
                {LessonsData.filter(
                  (lesson) => lesson.style.indexOf('Metal') > -1
                ).map((lesson, index) => (
                  <Flex key={index} flexDirection='column'>
                    <Flex my={1} bgColor='whiteAlpha.600'>
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
                  stroke='red'
                  fill='red'
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
              <AccordionPanel>
                {LessonsData.filter(
                  (lesson) => lesson.style.indexOf('Folk') > -1
                ).map((lesson, index) => (
                  <Flex key={index} flexDirection='column'>
                    <Flex my={1} bgColor='whiteAlpha.600'>
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
                  stroke='red'
                  fill='red'
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
              <AccordionPanel>
                {LessonsData.filter(
                  (lesson) => lesson.style.indexOf('Jazz') > -1
                ).map((lesson, index) => (
                  <Flex key={index} flexDirection='column'>
                    <Flex my={1} bgColor='whiteAlpha.600'>
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
                  stroke='red'
                  fill='red'
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
              <AccordionPanel>
                {LessonsData.filter(
                  (lesson) => lesson.style.indexOf('Bluegrass') > -1
                ).map((lesson, index) => (
                  <Flex key={index} flexDirection='column'>
                    <Flex my={1} bgColor='whiteAlpha.600'>
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
                  stroke='red'
                  fill='red'
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
              <AccordionPanel>
                {LessonsData.filter(
                  (lesson) => lesson.style.indexOf('Rock') > -1
                ).map((lesson, index) => (
                  <Flex key={index} flexDirection='column'>
                    <Flex my={1} bgColor='whiteAlpha.600'>
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
                  stroke='red'
                  fill='red'
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
              <AccordionPanel>
                {LessonsData.filter(
                  (lesson) => lesson.style.indexOf('Country') > -1
                ).map((lesson, index) => (
                  <Flex key={index} flexDirection='column'>
                    <Flex my={1} bgColor='whiteAlpha.600'>
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
                  stroke='red'
                  fill='red'
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
              <AccordionPanel>
                {LessonsData.filter(
                  (lesson) => lesson.style.indexOf('Reggae') > -1
                ).map((lesson, index) => (
                  <Flex key={index} flexDirection='column'>
                    <Flex my={1} bgColor='whiteAlpha.600'>
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
                  stroke='red'
                  fill='red'
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
              <AccordionPanel>
                {LessonsData.filter(
                  (lesson) => lesson.style.indexOf('Fusion') > -1
                ).map((lesson, index) => (
                  <Flex key={index} flexDirection='column'>
                    <Flex my={1} bgColor='whiteAlpha.600'>
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
                  stroke='red'
                  fill='red'
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
              <AccordionPanel>
                {LessonsData.filter(
                  (lesson) => lesson.style.indexOf('Funk') > -1
                ).map((lesson, index) => (
                  <Flex key={index} flexDirection='column'>
                    <Flex my={1} bgColor='whiteAlpha.600'>
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
                  stroke='red'
                  fill='red'
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
              <AccordionPanel>
                {LessonsData.filter(
                  (lesson) => lesson.style.indexOf('Pop') > -1
                ).map((lesson, index) => (
                  <Flex key={index} flexDirection='column'>
                    <Flex my={1} bgColor='whiteAlpha.600'>
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
