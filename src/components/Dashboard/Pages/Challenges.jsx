import { Flex, Text, Image, Tag } from '@chakra-ui/react';
import Slider from 'react-slick';
import { Instructors } from '../InstructorsData';
import { getLevelBackgroundColor } from './TagStyles';
import { getStyleBackgroundColor } from './TagStyles';
import { Auth } from '../../auth';
import { db } from '../../../config/firebase';
import { useEffect, useState } from 'react';
import { doc, getDocs, collection, updateDoc } from 'firebase/firestore';
import { auth } from '../../../config/firebase';

export default function Challenges() {
  const [userList, setUserList] = useState([]);
  const [updatedName, setUpdatedName] = useState('');

  const userCollectionRef = collection(db, 'instructors');

  const getUserList = async () => {
    try {
      const data = await getDocs(userCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUserList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUserList();
  }, [userList]);

  const updateName = async (id) => {
    const nameDoc = doc(db, 'instructors', id);
    await updateDoc(nameDoc, { name: updatedName });
  };

  const settings = {
    arrows: false,
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1.35,
    slidesToScroll: 1,
  };

  return (
    <Flex height='100vh' flexDirection='column'>
      <Flex pt={9} pb={7} justifyContent='center' bgColor='brand.darkGray'>
        <Text fontSize='3xl' fontWeight='medium' color='white'>
          Challenges
        </Text>
      </Flex>
      <Text fontSize='2xl' color='green'>
        {auth?.currentUser?.email}
      </Text>
      <Auth />

      <div>
        {userList.map((user, index) => (
          <div key={index}>
            <h1>{user.name}</h1>
            <input
              placeholder='Change Instructor Name...'
              onChange={(e) => setUpdatedName(e.target.value)}
            />
            <button onClick={() => updateName(user.id)}>Update</button>
          </div>
        ))}
      </div>
      <Flex flexDirection='column' my={6} py={3} bgColor='blackAlpha.400'>
        <Flex flexDirection='column'>
          <Text fontSize='2xl' fontWeight='semibold' ml={8}>
            Instructors
          </Text>
          <Slider {...settings}>
            {Instructors.map((user, index) => (
              <Flex key={index}>
                <Flex
                  flexDirection='column'
                  bgColor='rgba(225, 225, 225, .4)'
                  boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
                  my={4}
                  mx={14}
                  pt={2}
                  pb={1}
                  px={2}
                  width='170px'
                  alignItems='center'
                >
                  <Flex position='relative' height='200px' width='150px'>
                    <Flex
                      fontSize='md'
                      fontWeight='medium'
                      bgGradient='linear(to-t, rgba(0, 0, 0, .8), transparent)'
                      position='absolute'
                      color='white'
                      bottom='0'
                      left='0'
                      width='150px'
                      px={2}
                      zIndex={2}
                      flexDirection='column'
                    >
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
                      <Flex flexWrap='wrap' width='150px' pr={1} pb={2} gap={1}>
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
        </Flex>
      </Flex>
    </Flex>
  );
}
