import { Button, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Background from '../../images/Background.png';
import { ArrowRight } from '@phosphor-icons/react';

export default function Welcome() {
  const types = ['Beginner', 'Intermediate', 'Advanced'];
  const [selected, setSelected] = useState('');

  return (
    <Flex
      h='100vh'
      bgImage={Background}
      backgroundSize='cover'
      flexDirection='column'
      justifyContent='center'
      gap='120'
      letterSpacing='widest'
    >
      <Flex width='100vw' lineHeight='1.2' px='35px'>
        <Text
          fontSize='5xl'
          fontWeight={600}
          textShadow='0 4px 4px rgba(0, 0, 0, .25)'
        >
          PICK YOUR LEVEL
        </Text>
      </Flex>

      <Flex flexDirection='column' m='0 35px' gap='25'>
        {types.map((type, index) => (
          <Button
            key={type}
            onClick={() => setSelected(type)}
            variant={selected === type ? 'solid1' : 'solid3'}
            fontWeight='medium'
            h='5rem'
          >
            {type}
          </Button>
        ))}
        <Flex h='50px' alignItems='center' justifyContent='center' mt='30'>
          <Link to='/ChooseYourStyle'>
            <Flex
              display={selected ? 'flex' : 'none'}
              alignItems='center'
              justifyContent='center'
              gap='2'
            >
              <Text fontWeight='semibold'>Next</Text>
              <ArrowRight size={32} color='#454545' />
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
