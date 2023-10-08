import { Button, Flex, Text } from '@chakra-ui/react';
import { ArrowRight } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import Background from '../../images/Background.png';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../Helper/Context';

export default function Welcome() {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  const [selected, setSelected] = useState('');
  const types = ['Beginner', 'Intermediate', 'Advanced'];

  const updateProfile = async () => {
    const userRef = doc(db, 'users', user.uid);
    try {
      await updateDoc(userRef, {
        //enough time has passed that user doc now exists for a new user,
        //  so we'll set the displayName here as well as setting the level
        'preferences.level': selected,
        'personalInfo.displayName': user.personalInfo.displayName,
      });
      navigate('/ChooseYourStyle');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = 'Pick Your Level - SEUS';
  }, [user]);

  return (
    <Flex
      minH='100dvh'
      bgImage={Background}
      backgroundSize='cover'
      flexDirection='column'
      gap={20}
      pt={8}
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
        {types.map((type) => (
          <Button
            key={type}
            defaultValue={1}
            onClick={() => setSelected(type)}
            variant={selected === type ? 'solid1' : 'solid3'}
            fontWeight='medium'
            letterSpacing='widest'
            h='5rem'
          >
            {type}
          </Button>
        ))}
        <Flex h='50px' alignItems='center' justifyContent='center' mt='30'>
          <Button display={selected ? 'flex' : 'none'} onClick={updateProfile}>
            <Flex alignItems='center' justifyContent='center' gap='2'>
              <Text fontWeight='semibold'>Next</Text>
              <ArrowRight size={28} color='#454545' />
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
