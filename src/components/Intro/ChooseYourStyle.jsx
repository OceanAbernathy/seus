import { Button, Checkbox, Flex, Grid, Text } from '@chakra-ui/react';
import { ArrowRight } from '@phosphor-icons/react';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Background from '../../images/Background2.png';
import { StyleData } from './StyleData';
import { Context } from '../../Helper/Context';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';

export default function ChooseYourStyle() {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  const [checkedList, setCheckedList] = useState('');

  const updateProfile = async () => {
    const userRef = doc(db, 'users', user.uid);
    try {
      await updateDoc(userRef, {
        'preferences.style': checkedList,
      });
      navigate('/Dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = 'Choose Your Style - SEUS';
  }, [user]);

  return (
    <Flex
      minH='100dvh'
      bgImage={Background}
      backgroundSize='cover'
      flexDirection='column'
      letterSpacing='widest'
      pt={4}
    >
      <Flex
        width='100vw'
        flexDirection='column'
        lineHeight='1.2'
        px='35px'
        gap={7}
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
          gap={4}
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
                checkedList.includes(item.type) ? 'selected' : 'unSelected'
              }`}
            >
              <Text>{item.type}</Text>
            </Checkbox>
          ))}
        </Grid>
        <Flex h='50px' alignItems='center' justifyContent='center'>
          <Button
            display={checkedList.length > 0 ? 'flex' : 'none'}
            onClick={updateProfile}
          >
            <Flex alignItems='center' justifyContent='center' gap='2'>
              <Text fontWeight='semibold'>Begin</Text>
              <ArrowRight size={28} color='#454545' />
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
