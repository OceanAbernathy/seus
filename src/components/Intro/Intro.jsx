import { useState } from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { SliderData as slides } from './SliderData';
import { useNavigate } from 'react-router-dom';

export default function Intro() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const navigate = useNavigate();
  const pickYourLevel = () => navigate('/PickYourLevel');

  const moveDot = (index) => {
    setCurrent(index);
  };

  const nextSlide = () => {
    if (current === length - 1) {
      return pickYourLevel();
    } else {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current === 0) {
      return;
    } else {
      setCurrent(current - 1);
    }
  };

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) isLeftSwipe ? nextSlide() : prevSlide();
    console.log(current);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  return (
    <Flex
      w='100vw'
      height='100vh'
      bgColor='#ACDED2'
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((slide, index) => {
        return (
          <Flex key={index}>
            {index === current && (
              <Flex
                flexDirection='column'
                w='100vw'
                justifyContent='center'
                alignItems='center'
                gap='75'
                mt='70'
              >
                <Image src={slide.image} w='max-content' h='auto' />
                <Flex
                  flexDirection='column'
                  alignItems='center'
                  px='30'
                  gap='5'
                >
                  <Text fontSize='3xl'>{slide.heading}</Text>
                  <Text fontSize='md' fontWeight='medium' px='30px'>
                    {slide.description}
                  </Text>
                </Flex>
                <Flex gap='25'>
                  {slides.map((slide, index) => (
                    <Box
                      key={index}
                      onClick={() => moveDot(index)}
                      w='20px'
                      h='20px'
                      bgColor='brand.100'
                      opacity={current === index ? '1' : '.5'}
                      shadow={current === index ? 'base' : 'none'}
                      borderRadius='full'
                      filter='drop-shadow(0 2px 2px rgba(0, 0, 0, 0.25))'
                    ></Box>
                  ))}
                </Flex>
              </Flex>
            )}
          </Flex>
        );
      })}
    </Flex>
  );
}
