import { Checkbox, Flex, Grid, Text } from '@chakra-ui/react';
import { ArrowRight } from '@phosphor-icons/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Background from '../../images/Background2.png';
import { StyleData } from './StyleData';

export default function ChooseYourStyle() {
  const [checkedList, setCheckedList] = useState([]);

  return (
    <Flex
      h='100vh'
      bgImage={Background}
      backgroundSize='cover'
      flexDirection='column'
      justifyContent='center'
      letterSpacing='widest'
      pt={4}
    >
      <Flex
        width='100vw'
        flexDirection='column'
        lineHeight='1.2'
        px='35px'
        gap={10}
      >
        <Text
          fontSize='5xl'
          fontWeight={600}
          textShadow='0 4px 4px rgba(0, 0, 0, .25)'
        >
          CHOOSE YOUR STYLE
        </Text>
        <Text fontWeight={500}>
          Select all that apply. This can be changed later!
        </Text>
        <Grid
          w='100%'
          templateColumns='repeat(2, 1fr)'
          gap={6}
          mt='4'
          justifyItems='center'
          alignContent='center'
        >
          {StyleData.map((item) => (
            <Checkbox
              key={item.type}
              onChange={() => {
                const index = checkedList.indexOf(item.type);

                if (index > -1) {
                  setCheckedList([
                    ...checkedList.slice(0, index),
                    ...checkedList.slice(index + 1),
                  ]);
                } else {
                  setCheckedList([...checkedList, item.type]);
                }
              }}
              variant={`${
                checkedList.includes(item.type) ? 'selected' : 'unselected'
              }`}
            >
              <Text>{item.type}</Text>
            </Checkbox>
          ))}
        </Grid>
        <Flex h='50px' alignItems='center' justifyContent='center'>
          <Link to='/Dashboard'>
            <Flex
              display={checkedList.length > 0 ? 'flex' : 'none'}
              alignItems='center'
              justifyContent='center'
              gap='2'
            >
              <Text fontWeight='semibold'>Begin</Text>
              <ArrowRight size={28} color='#454545' />
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
