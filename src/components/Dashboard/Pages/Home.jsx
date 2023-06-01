import { Flex, Image, Tag, Text } from '@chakra-ui/react';
import Slider from 'react-slick';
import { Instructors } from '../Instructors';
import { getLevelBackgroundColor } from './TagStyles';
import { getStyleBackgroundColor } from './TagStyles';

export default function Home() {
  const settings = {
    arrows: false,
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    initialSlide: -0.25,
  };

  return (
    <Flex height='100vh' flexDirection='column'>
      <Flex pt={9} pb={7} justifyContent='center' bgColor='brand.darkGray'>
        <Text fontSize='3xl' fontWeight='medium' color='white'>
          Dashboard
        </Text>
      </Flex>
      <Flex flexDirection='column' my={10}>
        <Slider {...settings}>
          {Instructors.map((user, index) => (
            <Flex key={index}>
              <Flex
                flexDirection='column'
                bgColor='rgba(225, 225, 225, .4)'
                shadow='md'
                pt={2}
                px={2}
                width='fit-content'
              >
                <Flex position='relative' height='150px' width='150px'>
                  <Text
                    fontSize='md'
                    fontWeight='medium'
                    bgGradient='linear(to-t, rgba(0, 0, 0, .8), rgba(0, 0, 0, .6), transparent)'
                    position='absolute'
                    color='white'
                    bottom='0'
                    left='0'
                    width='150px'
                    px={2}
                    zIndex={2}
                  >
                    {user.name}
                  </Text>
                  <Image
                    src={user.image}
                    boxSize='150px'
                    objectFit='cover'
                    position='absolute'
                    top='0'
                    left='0'
                    right='0'
                    bottom='0'
                  />
                </Flex>

                <Flex flexDirection='column' my={1}>
                  <Flex width='150px' pr={1} py={1} gap={1} flexWrap='wrap'>
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
                  <Flex flexWrap='wrap' width='150px' pr={1} pb={1} gap={1}>
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
              </Flex>
            </Flex>
          ))}
        </Slider>
      </Flex>
    </Flex>
  );
}
