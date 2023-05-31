import { Flex, Image, Tag, Text } from '@chakra-ui/react';
import Slider from 'react-slick';
import { Instructors } from '../Instructors';

export default function Home() {
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Flex height='100vh' flexDirection='column'>
      <Flex
        width='100%'
        height='fit-content'
        pt={9}
        pb={7}
        justifyContent='center'
        bgColor='brand.darkGray'
      >
        <Text fontSize='3xl' fontWeight='medium' color='white'>
          Dashboard
        </Text>
      </Flex>
      <Flex
        flexDirection='column'
        justifyContent='center'
        margin='0 auto'
        m={10}
      >
        <Slider {...settings}>
          {Instructors.map((user) => (
            <Flex key={user.name}>
              <Flex position='relative' width='200px' height='200px'>
                <Text
                  fontSize='xl'
                  fontWeight='medium'
                  bgGradient='linear(to-t, rgba(0, 0, 0, .8), transparent)'
                  position='absolute'
                  color='white'
                  bottom='0'
                  left='0'
                  width='200px'
                  pl={2}
                  zIndex={2}
                >
                  {user.name}
                </Text>
                <Image
                  src={user.image}
                  boxSize='200px'
                  objectFit='cover'
                  position='absolute'
                  top='0'
                  left='0'
                  right='0'
                  bottom='0'
                />
              </Flex>
              <Tag>{user.level}</Tag>
            </Flex>
          ))}
        </Slider>
      </Flex>
    </Flex>
  );
}
